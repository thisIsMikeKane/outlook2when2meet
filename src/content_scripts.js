import $ from 'jquery';
import moment from 'moment';

import { AutosaveOff, AutosaveOn, isSignedIn, SelectStopNoSave, fillOutWhen2meet } from './utils_content_scripts/when2meetTab'

// Listen for messages from the popup script.
browser.runtime.onMessage.addListener((message) => {
    
    let slots = $('#YouGrid').find("div[data-time]");
    let slotStarts = $.map(slots, function (slot){return moment.unix(slot.getAttribute('data-time'))});
    let slotEnds = $.map(slotStarts, function(slotStart){return slotStart.clone().add(15,'m')});

    if (message.command === "isSignedIn") {
        return Promise.resolve({
            command: "isSignedIn",
            isSignedIn: isSignedIn()
        });
    } else if (message.command === "getWhen2meetBounds") {
        return Promise.resolve({
            command: "when2meetBounds",
            start: moment.min(slotStarts).clone().subtract(1,'d').utc().format(),
            end: moment.max(slotEnds).clone().add(1,'d').utc().format()
        });
    } else if (message.command === "when2meetEvents") {
        fillOutWhen2meet(message.events);
    } else {
        console.log('Unknown message');
        console.log(message);
    }
});