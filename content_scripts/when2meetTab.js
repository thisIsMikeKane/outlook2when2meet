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

    function AutosaveOff() {
        //Prevent page from saving for each slot, which can overflow the server
        document.onmouseup = null;
    }

    function AutosaveOn() {
        document.onmouseup=SelectStop;
    }

    function isSignedIn() {
        if ( typeof($('#SignIn').attr('style')) == 'undefined' || 
                !($('#SignIn').attr('style').match('display: none')) ) {
            console.log('Please sign in to when2meet and try again.');
            return false
        }
        return true
    }

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

    function fillOutWhen2meet(meetings) {
        let slots = $('#YouGrid').find("div[data-time]");
        let slotStarts = $.map(slots, function (slot){return moment.unix(slot.getAttribute('data-time'))});
        let slotEnds = $.map(slotStarts, function(slotStart){return slotStart.add(15,)});
        let meetingStarts = $.map(meetings, function (meeting){
            return moment.tz(meeting.start.dateTime, windows2IANL(meeting.start.timeZone));
        })
        let meetingEnds = $.map(meetings, function (meeting){
            return moment.tz(meeting.end.dateTime, windows2IANL(meeting.end.timeZone));
        })

        // Turn off autosave to avoid banging server
        executeInPage(AutosaveOff, false);

        for (let iSlots=0; iSlots<slots.length; iSlots++) {
            let slot = slots[iSlots];

            let slotStart = slotStarts[iSlots];
            let slotEnd = slotEnds[iSlots];
            for (let iMeetings=0; iMeetings<meetings.length; iMeetings++) {
                let meetingStart = meetingStarts[iMeetings];
                let meetingEnd = meetingEnds[iMeetings];
                if (
                    slotStart.isBetween(meetingStart,meetingEnd,undefined,'[]') ||
                    slotEnd.isBetween(meetingStart,meetingEnd,undefined,'[]') ||
                    meetingStart.isBetween(slotStart,slotEnd,undefined,'[]') ||
                    meetingEnd.isBetween(slotStart,slotEnd,undefined,'[]')
                ) {
                    slot.dispatchEvent(new Event('mousedown'));
                    slot.dispatchEvent(new Event('mouseover'));
                    document.dispatchEvent(new Event('mouseup'));
                    executeInPage(SelectStopNoSave, false);
                }
            }
        }

        // Turn autosave back on to make GUI usable
        executeInPage(AutosaveOn, false);
    }

    /**
     * Listen for messages from the popup script.
     */
    browser.runtime.onMessage.addListener((message) => {
        if (message.command === "isSignedIn") {
            // checkIsSignedIn();
            return Promise.resolve({
                command: "isSignedIn",
                isSignedIn: isSignedIn()
            });
        }else if (message.command === "when2meetEvents") {
            fillOutWhen2meet(message.events);
        } else {
            console.log('Unknown message');
            console.log(message);
        }
    });
})();
  