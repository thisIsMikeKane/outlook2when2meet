export function notifyUser(title,message,type='basic') {
    browser.notifications.create({
      "type": type,
      "title": title,
      "message": message,
    });
}
//TODO figure out why notifications aren't working