import { notifyUser } from './utils_background/notifications';
import { checkWhen2meet, fillOutWhen2meet } from './utils_background/when2meet';
import { signIn } from './utils_background/auth';
import { STR_ERROR_NOTIFICATION } from './utils_background/strings';

browser.action.onClicked.addListener(async function(tab){

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