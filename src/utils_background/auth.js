import { PublicClientApplication } from  '@azure/msal-browser';

import { initializeGraphClient, getUser } from './graph'

const CLIENT_ID = process.env.AZURE_CLIENT_ID;

// Set the redirect URI to the https://<ID>.extensions.allizom.org/ provided by Firefox
const redirectUri = typeof browser !== "undefined" && browser.identity ?
    browser.identity.getRedirectURL() : 
    `${window.location.origin}/index.html`;

console.log("Firefox extension redirect URI set to ", redirectUri);
console.log("This url must be registered in the Azure portal as a single-page application redirect uri, and as the post logout url");
//TODO save signin token

const msalInstance = new PublicClientApplication({
    auth: {
        authority: "https://login.microsoftonline.com/common/",
        clientId: CLIENT_ID,
        redirectUri,
        postLogoutRedirectUri: redirectUri
    },
    cache: {
        cacheLocation: "localStorage"
    }
});

const msalRequest = {
  scopes: [
    'user.read',
    'mailboxsettings.read',
    'calendars.read'
  ]
}

// <signInSnippet>
export async function signIn() {

  await msalInstance.initialize();

  // Assemble login URL
  const url = await getLoginUrl(msalRequest);

  // Use the Mozilla Extension web auth flow
  const result = await launchWebAuthFlow(url);
  console.log("Signed in as '"+result.account.username+"'")

  // Initialize the Graph client
  initializeGraphClient(msalInstance, result.account, msalRequest.scopes);

  // Get the user's profile from Graph
  const user = await getUser();

  // Save the profile in session
  sessionStorage.setItem('graphUser', JSON.stringify(user));
  
}
// </signInSnippet>

// <signOutSnippet>
async function signOut() {
  sessionStorage.removeItem('graphUser');
  const logoutUrl = await getLogoutUrl();
  await launchWebAuthFlow(logoutUrl);
}
// </signOutSnippet>

/**
 * Generates a login url
 */
 async function getLoginUrl(request, reject) {
  return new Promise((resolve) => {
      msalInstance.loginRedirect({
          ...request,
          onRedirectNavigate: (url) => {
              resolve(url);
              return false;
          }
      }).catch(reject);
  });
}

/**
* Generates a logout url
*/
async function getLogoutUrl(request) {
  return new Promise((resolve, reject) => {
      msalInstance.logout({
          ...request,
          onRedirectNavigate: (url) => {
              resolve(url);
              return false;
          }
      }).catch(reject);
  });
}

/**
* Makes an http request to the MS graph Me endpoint
*/
async function callGraphMeEndpoint() {
  const {
      accessToken
  } = await acquireToken({
      scopes: [ "user.read" ],
      account: msalInstance.getAllAccounts()[0]
  });

  return callMSGraph("https://graph.microsoft.com/v1.0/me", accessToken);
}

/**
* Makes an http request to the given MS graph endpoint
*/
async function callMSGraph(endpoint, accessToken) {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  const options = {
      method: "GET",
      headers
  };

  return fetch(endpoint, options)
      .then(response => response.json())
      .catch(error => console.log(error));
}

/**
* Attempts to silent acquire an access token, falling back to interactive.
*/
async function acquireToken(request) {
  return msalInstance.acquireTokenSilent(request)
      .catch(async (error) => {
          console.error(error);
          const acquireTokenUrl = await getAcquireTokenUrl(request);

          return launchWebAuthFlow(acquireTokenUrl);
      })
}

/**
* Generates an acquire token url
*/
async function getAcquireTokenUrl(request) {
  return new Promise((resolve, reject) => {
      msalInstance.acquireTokenRedirect({
          ...request,
          onRedirectNavigate: (url) => {
              resolve(url);
              return false;
          }
      }).catch(reject);
  });
}

/**
* Launch the Chromium web auth UI.
* @param {*} url AAD url to navigate to.
* @param {*} interactive Whether or not the flow is interactive
*/
async function launchWebAuthFlow(url) {
  return new Promise((resolve, reject) => {
      browser.identity.launchWebAuthFlow({
          interactive: true,
          url
      }, (responseUrl) => {
          // Response urls includes a hash (login, acquire token calls)
          if (responseUrl.includes("#")) {
              msalInstance.handleRedirectPromise(`#${responseUrl.split("#")[1]}`)
                  .then(resolve)
                  .catch(reject)
          } else {
              // Logout calls
              resolve();
          }
      })
  })
}

/**
* Returns the user sign into the browser.
*/
async function getSignedInUser() {
  return new Promise((resolve, reject) => {
      if (false && browser && browser.identity) {
          // Running in extension popup
        //   browser.identity.getProfileUserInfo((user) => {
        //       if (user) {
        //           resolve(user);
        //       } else {
        //           resolve(null);
        //       }
        //   });
      } else {
          // Running on localhost
          resolve(null);
      }
  })
}