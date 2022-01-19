async function queryTabs(callBack) {
    function onError(error) {
        updatePage(Views.error, {
            message: 'Error on getting tabs',
            error: error
        })
    }

    let querying = browser.tabs.query({currentWindow: true, active: true});
    querying.then(callBack, onError);
}

async function messageActiveTab(message,callBack,errMsg){
    queryTabs(function (tabs) {
        browser.tabs.sendMessage(tabs[0].id, message)
        .then(callBack)
        .catch(function (error) {
            updatePage(Views.error, {
                message: errMsg,
                error: error
            });
        })
    })
    .catch(function (error) {
        updatePage(Views.error, {
            message: 'Error getting tabs',
            error: error
        })
    });
}

async function checkWhen2meet() {

    function isWhen2meetTab(tabs) {
        // Test that it a when2meet page
        var re = new RegExp('when2meet\.com');
        if (!(re.test(tabs[0].url))) {
            updatePage(Views.error, {
                message: 'Navigate to a when2meet.com page to use this extension.' //TODO move to strings.js
            })
        }
    }

    function isSignedIn(message) {
        if (!(message.isSignedIn)) {
            updatePage(Views.error, {
                message: 'Log into When2meet.com then try the extension again.' //TODO move to strings.js
            })
        }
    }

    queryTabs(isWhen2meetTab)
    .then(messageActiveTab(
        {command: "isSignedIn"},
        isSignedIn,
        "Error determining if signed into When2meet"
        ))       

}

function fillOutWhen2meet() {
    getEvents( function (events) {
        messageActiveTab({
            command: "when2meetEvents",
            events: events
        },null,"Error sending events to when2meet")
    });
}

/**
 * There was an error executing the script.
 * Display the popup's error message, and hide the normal UI.
 */
 function reportExecuteScriptError(error) {
    updatePage(Views.error ,{
        message: `Failed to execute content script: ${error.message}`
    })
}
/**
 * When the popup loads, inject a content script into the active tab,
 * and add a click handler.
 * If we couldn't inject the script, handle the error.
 */
browser.tabs.executeScript({file: "/lib/jquery-3.6.0.min.js"})
    .catch(reportExecuteScriptError);
browser.tabs.executeScript({file: "/lib/moment.min.js"})
    .catch(reportExecuteScriptError);
browser.tabs.executeScript({file: "/lib/moment-timezone-with-data-10-year-range.js"})
    .catch(reportExecuteScriptError);
browser.tabs.executeScript({file: "/content_scripts/windows2IANL.js"})
    .catch(reportExecuteScriptError);
browser.tabs.executeScript({file: "/content_scripts/executeInPage.js"})
    .catch(reportExecuteScriptError);
browser.tabs.executeScript({file: "/content_scripts/when2meetTab.js"})
    .catch(reportExecuteScriptError);

    
checkWhen2meet();
