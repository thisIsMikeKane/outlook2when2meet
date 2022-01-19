function notifyUser(title,message,type='basic') {
    browser.notifications.create({
      "type": type,
      "title": title,
      "message": message
    });
}

browser.browserAction.onClicked.addListener(async function(tab){

    // Check that the current page is when2meet.com
    try {
        await checkWhen2meet();
    } catch(error) {
        notifyUser(STR_ERROR_NOTIFICATION, error.message);
        console.error(error);
        return 
    }
    
    // Log into Microsoft
    try {
        await signIn();
    } catch(error) {
        notifyUser(STR_ERROR_NOTIFICATION, error.message);
        console.error(error);
        return;
    }
    
    // Fill out When2meet
    try {
        fillOutWhen2meet();
    } catch(error) {
        notifyUser(STR_ERROR_NOTIFICATION, error.message);
        console.error(error);
        return;
    }

});