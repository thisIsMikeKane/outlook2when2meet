# outlook2when2meet
A Firefox extension to fill out [When2meet](https://www.when2meet.com) forms based on availability in Outlook web calendar.

## Installation

Install as any other FireFox extension. 

## Use

When you have a When2Meet form open and you have logged in (i.e., provided credentials in the left half the screen), then simply click the Outlook2When2Meet extension icon (looks like a calendar) and follow the Outlook login instructions. The extension may take a moment, but will then fill out When2meet form based on the availability in your Outlook calendar. 

TODO write privacy policy

# Development

## Environment

Copy `example.env` to `.env` and add your Azure Active Directory [CLIENT_ID](https://learn.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-javascript-spa#register-the-application)

TODO Add details for registering app with Azure

## Installation

Change into this directory and install all [NodeJS](https://nodejs.org/en) dependencies with [npm](http://npmjs.com/). 

```bash
npm install
```

## Building

You can build the extension using:

```bash
npm run build
```

This creates the source bundles for the WebExtension in the `extension` subdirectory, and you can manually install the add-on on Firefox by loading the `extension` from [about:debugging#addons] page.

## Running

You can also build the sources and start a new Firefox instance with the add-on installed in one command:

```bash
npm run start
```

To start a webpack instance that automatically rebuilds the add-on when you change the sources, in another shell window, you can run the following npm script:

```bash
npm run build:watch
```

While this npm script is running, any time you edit a file, it will be rebuilt automatically.