# outlook2when2meet
A Firefox extension to fill out When2meet forms based on availability in Outlook web calendar.

## Installation

Clone the repository to a permanent location on your computer. Then, 

## Setup
1. Create a [new app registration](https://docs.microsoft.com/azure/active-directory/develop/quickstart-register-app) in the Azure Portal.
1. Provide your client ID in the `PublicClientApplication` configuration in `auth.js`.
1. Under the **Authentication** tab, add a new redirect URI under **Single-page application**.
1. The url of this redirect URI should be of the format `https://<extension-id>.chromiumapp.org`, e.g. `https://epfnbngoodhmbeepjlcohfacgnbhbhah.chromiumapp.org/`.
1. You should also set this url as the **Logout URL**.
1. Your extension ID can be found on the Extensions settings page after the extension has been loaded, or by invoking `chrome.identity.getRedirectURL()` in the extension.

## Use


# Development

This extension is written in vanilla javascript. 

## Directory Structure

* `config.example.js` Example configuration file. This file must be copied and modified with an as described above
* `manifest.json` Firefox extension manifest file
* `README.md` This readme file
* `content_scripts/` Extension scripts that are executed in the tab's context
* `icons/` Icons used in the extension
* `lib/` Third party scripts copied here to reduce web requests
* `ui/` The extension user interface

