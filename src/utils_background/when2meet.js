import { getEvents } from './graph'
import { ERROR_CURRENT_TAB, ERROR_WHEN2MEET_LOGIN } from './strings';

// Get the 
async function queryTabs() {
    return await browser.tabs.query({currentWindow: true, active: true});
}

//Send a message to the content script of the active tab
async function messageActiveTab(message){
    let tabs = await queryTabs();
    return browser.tabs.sendMessage(tabs[0].id, message);
}

// Check if signed into When2meet
export async function checkWhen2meet() {

    /**
     * When the popup loads, inject a content script into the active tab,
     * and add a click handler.
     * If we couldn't inject the script, handle the error.
     */
    // await browser.tabs.executeScript({file: "/lib/jquery-3.6.0.min.js"})
    // await browser.tabs.executeScript({file: "/lib/moment.min.js"})
    // await browser.tabs.executeScript({file: "/lib/moment-timezone-with-data-10-year-range.js"})
    // await browser.tabs.executeScript({file: "/timezones.js"})
    // await browser.tabs.executeScript({file: "/content_scripts/executeInPage.js"})
    // await browser.tabs.executeScript({file: "/content_scripts/when2meetTab.js"})

    function isWhen2meetTab(tabs) {
        // Test that it a when2meet page
        var re = new RegExp('when2meet\.com');
        if (!(re.test(tabs[0].url))) {
            throw new Error(ERROR_CURRENT_TAB);
        }
    }

    function isSignedIn(message) {
        if (!(message.isSignedIn)) {
            throw new Error(ERROR_WHEN2MEET_LOGIN);
        }
    }

    let tabs = await queryTabs();
    try {
        isWhen2meetTab(tabs);
    } catch(error) {
        return Promise.reject(error);
    }
    
    try {
        let message = await messageActiveTab({command: "isSignedIn"});
        isSignedIn(message);
    } catch(error) {
        return Promise.reject(error);
    }

}

// Get Outlook events and fill out When2meet
export async function fillOutWhen2meet() {
    let message = null;
    let events = null;

    try {
        message = await messageActiveTab({command: "getWhen2meetBounds"});
    } catch(error) {
        return Promise.reject(error);
    }

    try {
        let firstMoment = message.start;
        let lastMoment = message.end;
        events = await getEvents(firstMoment,lastMoment);
        console.log('Found '+events.length+' events on Calendar.')
    } catch(error) {
        return Promise.reject(error);
    }
    
    try {
        messageActiveTab({
            command: "when2meetEvents",
            events: events
        });
    } catch(error) {
        return Promise.reject(error);
    }
}
