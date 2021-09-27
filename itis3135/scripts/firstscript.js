var userName = prompt("Hi user, what's your name?");
var userStatus = prompt("How was your day?");
var today = new Date();
document.write("Today's date is " + today.toDateString() + ". The time right now is " + today.getHours() + ":" + today.getMinutes() +
 ". Our group, Satyrical Axolotl Inc. is glad to have you with us, " + userName + "! We see that your day was " + userStatus + 
 ", and we hope that we can make it better!!")