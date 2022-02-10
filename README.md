# outlook2when2meet
A Firefox extension to fill out [When2meet](https://www.when2meet.com) forms based on availability in Outlook web calendar.

## Installation

Install as any other FireFox extension. 

## Use

When you have a When2Meet form open and you have logged in (i.e., provided credentials in the left half the screen), then simply click the Outlook2When2Meet extension icon (looks like a calendar) and follow the Outlook login instructions. The extension may take a moment, but will then fill out When2meet form based on the availability in your Outlook calendar. 

# Development

This extension is written in vanilla javascript. 

## Directory Structure

* `config.example.js` Example configuration file. This file must be copied and modified with an as described above
* `README.md` This readme file
* `content_scripts/` Extension scripts that are executed in the tab's context
* `icons/` Icons used in the extension
* `lib/` Third party scripts copied here to reduce web requests

