// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// Select DOM elements to work with
const authenticatedNav = document.getElementById('authenticated-nav');
const accountNav = document.getElementById('account-nav');
const mainContainer = document.getElementById('main-container');

const Views = { error: 1, home: 2, calendar: 3 };

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

function showAuthenticatedNav(user, view) {
  authenticatedNav.innerHTML = '';
  if (user) {

    // Removed Calendar link because it caused resize problems and wasn't useful. 
    // // Add Calendar link
    // let calendarNav = createElement('li', 'nav-item');
    // let calendarLink = createElement('button',
    //   `btn btn-link nav-link${view === Views.calendar ? ' active' : '' }`,
    //   STR_BTN_CALENDAR);
    // calendarLink.setAttribute('id', 'btn-nav-calendar');
    // calendarNav.appendChild(calendarLink);
    // authenticatedNav.appendChild(calendarNav);
    // document.addEventListener('click',function(e){
    //   if(e.target && e.target.id=='btn-nav-calendar'){
    //     getEvents( function (events) {
    //       updatePage(Views.calendar, events)
    //     });
    //   }
    // });

    // Add Fill When2meet link
    let FillWhen2meetLink = createElement('button',
      `btn btn-link nav-link${view === Views.calendar ? ' active' : '' }`,
      STR_BTN_FILL_WHEN2MEET);
      FillWhen2meetLink.setAttribute('id', 'btn-nav-fill-when2meet');
    calendarNav.appendChild(FillWhen2meetLink);
    authenticatedNav.appendChild(calendarNav);
    document.addEventListener('click',function(e){
      if(e.target && e.target.id=='btn-nav-fill-when2meet'){
        getEvents( function (events) {
          fillOutWhen2meet(events);
        });
      }
    });
  }
}

function showAccountNav(user) {

  accountNav.innerHTML = '';

  if (user) {
    // Show the "signed-in" nav
    accountNav.className = 'nav-item dropdown';

    let dropdown = createElement('a', 'nav-link dropdown-toggle');
    dropdown.setAttribute('data-bs-toggle', 'dropdown');
    dropdown.setAttribute('role', 'button');
    accountNav.appendChild(dropdown);

    let userIcon = createElement('img', 'rounded-circle align-self-center me-2');
    userIcon.style.width = '32px';
    userIcon.src = 'g-raph.png';
    userIcon.alt = 'user';
    dropdown.appendChild(userIcon);

    let menu = createElement('div', 'dropdown-menu dropdown-menu-end');
    accountNav.appendChild(menu);

    let userName = createElement('h5', 'dropdown-item-text mb-0', user.displayName);
    menu.appendChild(userName);

    let userEmail = createElement('p', 'dropdown-item-text text-muted mb-0', user.mail || user.userPrincipalName);
    menu.appendChild(userEmail);

    let divider = createElement('hr', 'dropdown-divider');
    menu.appendChild(divider);

    let signOutButton = createElement('button', 'dropdown-item', STR_BTN_SIGN_OUT);
    signOutButton.setAttribute('id', 'btn-nav-sign-out');
    menu.appendChild(signOutButton);
    document.addEventListener('click',function(e){
      if(e.target && e.target.id=='btn-nav-sign-out'){
        signOut();
      }
    });
  } else {
    // Show a "sign in" button
    accountNav.className = 'nav-item';

    let signInButton = createElement('button', 'btn btn-link nav-link', STR_BTN_SIGN_IN);
    signInButton.setAttribute('id', 'btn-nav-sign-in');
    accountNav.appendChild(signInButton);
    document.addEventListener('click',function(e){
      if(e.target && e.target.id=='btn-nav-sign-in'){
        signIn();
      }
    });
  }
}

function showWelcomeMessage(user) {
  // Create jumbotron
  let jumbotron = createElement('div', 'p-5 mb-4 bg-light rounded-3');

  let container = createElement('div', 'container-fluid py-5');
  jumbotron.appendChild(container);

  let heading = createElement('h1', null, STR_WELCOME_TITLE);
  container.appendChild(heading);

  let lead = createElement('p', 'lead', STR_WELCOME_LEAD);
    container.appendChild(lead);

  if (user) {
    // Welcome the user by name
    let welcomeMessage = createElement('h4', null, 
      STR_WELCOME_WELCOME+` ${user.displayName}!`);
    container.appendChild(welcomeMessage);

    let callToAction = createElement('p', null,
      STR_WELCOME_ACTION);
    container.appendChild(callToAction);

    let signInButton = createElement('button', 
      'btn btn-primary btn-large',
      STR_BTN_WELCOME_ACTION);
    signInButton.setAttribute('id', 'btn-welcome-fill-when2meet')
    container.appendChild(signInButton);
    document.addEventListener('click',function(e){
      if(e.target && e.target.id=='btn-welcome-fill-when2meet'){
        getEvents( function (events) {
          fillOutWhen2meet(events);
        });
      }
    });
  } else {
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

  }

  mainContainer.innerHTML = '';
  mainContainer.appendChild(jumbotron);
}

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

// <showCalendarSnippet>
function showCalendar(events) {
  let div = document.createElement('div');

  div.appendChild(createElement('h1', 'mb-3', 'Calendar'));

  let table = createElement('table', 'table');
  div.appendChild(table);

  let thead = document.createElement('thead');
  table.appendChild(thead);

  let headerrow = document.createElement('tr');
  thead.appendChild(headerrow);

  let organizer = createElement('th', null, 'Organizer');
  organizer.setAttribute('scope', 'col');
  headerrow.appendChild(organizer);

  let subject = createElement('th', null, 'Subject');
  subject.setAttribute('scope', 'col');
  headerrow.appendChild(subject);

  let start = createElement('th', null, 'Start');
  start.setAttribute('scope', 'col');
  headerrow.appendChild(start);

  let end = createElement('th', null, 'End');
  end.setAttribute('scope', 'col');
  headerrow.appendChild(end);

  let tbody = document.createElement('tbody');
  table.appendChild(tbody);

  for (const event of events) {
    let eventrow = document.createElement('tr');
    eventrow.setAttribute('key', event.id);
    tbody.appendChild(eventrow);

    let organizercell = createElement('td', null, event.organizer.emailAddress.name);
    eventrow.appendChild(organizercell);

    let subjectcell = createElement('td', null, event.subject);
    eventrow.appendChild(subjectcell);

    // Use moment.utc() here because times are already in the user's
    // preferred timezone, and we don't want moment to try to change them to the
    // browser's timezone
    let startcell = createElement('td', null,
      moment.utc(event.start.dateTime).format('M/D/YY h:mm A'));
    eventrow.appendChild(startcell);

    let endcell = createElement('td', null,
      moment.utc(event.end.dateTime).format('M/D/YY h:mm A'));
    eventrow.appendChild(endcell);
  }

  mainContainer.innerHTML = '';
  mainContainer.appendChild(div);
}
// </showCalendarSnippet>

// <updatePageSnippet>
function updatePage(view, data) {
  if (!view) {
    view = Views.home;
  }

  const user = JSON.parse(sessionStorage.getItem('graphUser'));

  showAccountNav(user);
  showAuthenticatedNav(user, view);

  switch (view) {
    case Views.error:
      showError(data);
      break;
    case Views.home:
      showWelcomeMessage(user);
      break;
    case Views.calendar:
      showCalendar(data);
      break;
  }
}
// </updatePageSnippet>



/**
 * First update of popup page
 */
updatePage(Views.home);

