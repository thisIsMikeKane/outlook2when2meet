(function() {
    /**
     * Check and set a global guard variable.
     * If this content script is injected into the same page again,
     * it will do nothing next time.
     */
    if (window.hasRun) {
        return;
    }
    window.hasRun = true;     

    // Disable autosave to server on mouseup to avoid http request overflow
    function AutosaveOff() {
        document.onmouseup = null;
    }

    // Renable autosave on mouseup
    function AutosaveOn() {
        document.onmouseup=SelectStop;
    }

    // Is the current page signed into When2meet
    function isSignedIn() {
        if ( typeof($('#SignIn').attr('style')) == 'undefined' || 
                !($('#SignIn').attr('style').match('display: none')) ) {
            console.log('Please sign in to when2meet and try again.');
            return false
        }

        return true
    }

    // Same as default mouseup function, but without saving to server
    function SelectStopNoSave() {
        if (!IsMouseDown) return;
        var TimesToToggle = new Array();
          var binaryAvailability = "";
        for (var i=0;i<TimeOfSlot.length;i++) {
          if (FromCol<ToCol) { ColA=FromCol; ColB=ToCol; } else { ColA=ToCol; ColB=FromCol; }
          if (FromRow<ToRow) { RowA=FromRow; RowB=ToRow; } else { RowA=ToRow; RowB=FromRow; }
          
          var currentElement = document.getElementById("YouTime"+TimeOfSlot[i]);
          if (currentElement) {
            var dataCol = Number(currentElement.getAttribute("data-col"));
            var dataRow = Number(currentElement.getAttribute("data-row"));
    
            var WithinX = ((ColA<=dataCol)&&(dataCol<=ColB));
            var WithinY = ((RowA<=dataRow)&&(dataRow<=RowB));
          
            if (WithinX && WithinY) {
              TimesToToggle.push(TimeOfSlot[i]);
              if (ChangeToAvailable && (-1==AvailableAtSlot[i].indexOf(UserID)))
                AvailableAtSlot[i].push(UserID);
              if ((!ChangeToAvailable) && (-1!=AvailableAtSlot[i].indexOf(UserID))) {
                SplitSpot = AvailableAtSlot[i].indexOf(UserID);
                AvailableAtSlot[i].splice(SplitSpot,1);
              }
            }
            if (-1!=AvailableAtSlot[i].indexOf(UserID)) {
               binaryAvailability += "1";
            } else {
              binaryAvailability += "0";
            }
          }
        }
        
        IsMouseDown=false;
        FromCol=-1; ToCol=-1; FromRow=-1; ToRow=-1;
        ReColorIndividual();
        ReColorGroup();
    }

    // Fill out the When2meet slots based on meetings availability
    function fillOutWhen2meet(meetings) {

        let slots = $('#YouGrid').find("div[data-time]");
        let slotStarts = $.map(slots, function (slot){return moment.unix(slot.getAttribute('data-time'))});
        let slotEnds = $.map(slotStarts, function(slotStart){return slotStart.clone().add(15,'m')});
        let meetingStarts = $.map(meetings, function (meeting){
            return moment.tz(meeting.start.dateTime, getIanaFromWindows(meeting.start.timeZone));
        })
        let meetingEnds = $.map(meetings, function (meeting){
            return moment.tz(meeting.end.dateTime, getIanaFromWindows(meeting.end.timeZone));
        })

        // Turn off autosave to avoid banging server
        executeInPage(AutosaveOff, false);

        let isSlotFree = new Array(slots.length).fill(true);
        for (let iSlots=0; iSlots<slots.length; iSlots++) {
            let slot = slots[iSlots];

            let slotStart = slotStarts[iSlots];
            let slotEnd = slotEnds[iSlots];
            for (let iMeetings=0; iMeetings<meetings.length; iMeetings++) {
                let meetingStart = meetingStarts[iMeetings];
                let meetingEnd = meetingEnds[iMeetings];
                if (
                    slotStart.isBetween(meetingStart,meetingEnd,undefined,'[)') ||
                    slotEnd.isBetween(meetingStart,meetingEnd,undefined,'(]') ||
                    meetingStart.isBetween(slotStart,slotEnd,undefined,'[)') ||
                    meetingEnd.isBetween(slotStart,slotEnd,undefined,'(]')
                ) {
                    isSlotFree[iSlots] = false;
                    continue;
                }
            }
        }

        for (let iSlots=0; iSlots<slots.length; iSlots++) {
            let slot = slots[iSlots];
            if (isSlotFree[iSlots]) {
                slot.dispatchEvent(new Event('mousedown'));
                slot.dispatchEvent(new Event('mouseover'));
                document.dispatchEvent(new Event('mouseup'));
                executeInPage(SelectStopNoSave, false);
            }
        }

        // Turn autosave back on to make GUI usable
        executeInPage(AutosaveOn, false);
        // Trigger autosave
        slots[0].dispatchEvent(new Event('mousedown'));
        slots[0].dispatchEvent(new Event('mouseover'));
        document.dispatchEvent(new Event('mouseup'));
        slots[0].dispatchEvent(new Event('mousedown'));
        slots[0].dispatchEvent(new Event('mouseover'));
        document.dispatchEvent(new Event('mouseup'));
    }

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
})();
  