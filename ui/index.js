const mainContainer = document.getElementById('main-container');

// User flow
// 1. Sign into Microsoft
// 2. Fill out When2meet
const Views = { error: 1, home: 2, success: 3};

// Generic function to create elements
function createElement(type, className, text) {
    let element = document.createElement(type);
    element.className = className;
  
    if (text) {
      let textNode = document.createTextNode(text);
      element.appendChild(textNode);
    }
  
    return element;
}

// Render error message in popup
function showError(error) {
    let alert = createElement('div', 'alert alert-danger');
  
    let message = createElement('p', 'mb-3', error.message);
    alert.appendChild(message);
  
    if (error.debug)
    {
      let pre = createElement('pre', 'alert-pre border bg-light p-2');
      alert.appendChild(pre);
  
      let code = createElement('code', 'text-break text-wrap',
        JSON.stringify(error.debug, null, 2));
      pre.appendChild(code);
    }
  
    mainContainer.innerHTML = '';
    mainContainer.appendChild(alert);
  }

// Render error message in popup
function showSucces(messageStr) {
    fillOutWhen2meet();

    let alert = createElement('div', 'alert alert-success');
  
    let message = createElement('p', 'mb-3', messageStr);
    alert.appendChild(message);
  
    mainContainer.innerHTML = '';
    mainContainer.appendChild(alert);
}

// Render MS login info
function showHome(user) {
    // Create jumbotron
    let jumbotron = createElement('div', 'jumbotron')
    // Insert container into jumbotron
    let container = createElement('div', 'container');
    jumbotron.appendChild(container);

    let lead = createElement('p', 'lead', STR_WELCOME_LEAD);
    container.appendChild(lead);

    // Show a sign in button in the jumbotron
    let signInButton = createElement('button', 'btn btn-primary btn-large',
      STR_BTN_WELCOME_SIGN_IN);
    signInButton.setAttribute('id', 'btn-welcome-sign-in')
    container.appendChild(signInButton);
    document.addEventListener('click',function(e){
      if(e.target && e.target.id== 'btn-welcome-sign-in'){
        signIn();
      }
    });

    mainContainer.innerHTML = '';
    mainContainer.appendChild(jumbotron);

    updatePage(Views.success, STR_SUCCESS);
}

// Render popup
function updatePage(view, data) {

    const user = JSON.parse(sessionStorage.getItem('graphUser'));

    if (!view) {
        if(user) {
            view = Views.success(user);
        } else {
            view = Views.home;
        }
    }

    switch (view) {
        case Views.error:
        showError(data);
        break;
        case Views.home:
        showHome();
        break;
        case Views.success:
        showSucces(data);
        break;
    }
}

// First update of popup
updatePage(Views.home);
