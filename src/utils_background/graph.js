// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { PublicClientApplication, InteractionType, AccountInfo } from "@azure/msal-browser";
import { AuthCodeMSALBrowserAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/authCodeMsalBrowser";
import { Client } from "@microsoft/microsoft-graph-client";
import moment from 'moment-timezone';

import { getIanaFromWindows } from './timezones'

const IGNORE_FULL_DAY = process.env.IGNORE_FULL_DAY;

// <graphInitSnippet>
let graphClient = undefined;

export function initializeGraphClient(msalClient, account, scopes)
{
  // Create an authentication provider
  const authProvider = new AuthCodeMSALBrowserAuthenticationProvider(msalClient, {
    account: account,
    scopes: scopes,
    interactionType: InteractionType.PopUp
  });

  // Initialize the Graph client
  graphClient = Client.initWithMiddleware({authProvider});
}
// </graphInitSnippet>

// <getUserSnippet>
export async function getUser() {
  return graphClient
    .api('/me')
    // Only get the fields used by the app
    // .select('id,displayName,mail,userPrincipalName,mailboxSettings')
    .select('id,displayName,mailboxSettings')
    .get();
}
// </getUserSnippet>

// <getEventsSnippet>
export async function getEvents(startOfWeek=null,endOfWeek=null) {
  const user = JSON.parse(sessionStorage.getItem('graphUser'));
  // Convert user's Windows time zone ("Pacific Standard Time")
  // to IANA format ("America/Los_Angeles")
  // Moment needs IANA format
  console.log(user)
  let ianaTimeZone = getIanaFromWindows(user.mailboxSettings.timeZone);
  console.log(`Converted: ${ianaTimeZone}`);

  if (!startOfWeek) {
    // Configure a calendar view for the current week
    // Get midnight on the start of the current week in the user's timezone,
    // but in UTC. For example, for Pacific Standard Time, the time value would be
    // 07:00:00Z
    let startOfWeek = moment.tz(ianaTimeZone).startOf('week').utc();
    // Set end of the view to 7 days after start of week
    let endOfWeek = moment(startOfWeek).add(7, 'day');
    startOfWeek = startOfWeek.utc().format();
    endOfWeek = endOfWeek.utc().format();
  }

  // GET /me/calendarview?startDateTime=''&endDateTime=''
  // &$select=subject,organizer,start,end
  // &$orderby=start/dateTime
  // &$top=50
  let response = await graphClient
    .api('/me/calendarview')
    // Set the Prefer=outlook.timezone header so date/times are in
    // user's preferred time zone
    .header("Prefer", `outlook.timezone="${user.mailboxSettings.timeZone}"`)
    // Add the startDateTime and endDateTime query parameters
    .query({ startDateTime: startOfWeek, endDateTime: endOfWeek })
    // Select just the fields we are interested in
    .select('subject,organizer,start,end')
    // Sort the results by start, earliest first
    .orderby('start/dateTime')
    // Maximum 50 events in response
    .top(50)
    .get();

  let meetings = response.value;
  if (IGNORE_FULL_DAY) {
    // Remove meetings that are 24 hours long starting and ending on the hour
    //TODO decide if there's a better way to determine full day events
    meetings = meetings.filter((meeting) => !( // Not, a 24 hour event starting and ending on the hour
      // 24 hour event
      (moment.tz(meeting.end.dateTime, getIanaFromWindows(meeting.end.timeZone)).diff(
        moment.tz(meeting.start.dateTime, getIanaFromWindows(meeting.start.timeZone))) == 86400000) && 
      // Starts on the hour local time
      (moment(meeting.start.dateTime).startOf('hour').unix() == moment(meeting.start.dateTime).unix()) && 
      // Ends on the hour local time
      (moment(meeting.end.dateTime).startOf('hour').unix() == moment(meeting.end.dateTime).unix())))
  }
  return meetings;
}
// </getEventsSnippet>


