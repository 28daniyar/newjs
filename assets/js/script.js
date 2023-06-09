const currentTimeDoc = document.getElementById('currentTime');
const currentDateDOc = document.getElementById('currentDate');

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

today = new Date();
let dayOfWeek = weekday[today.getDay()];
let currentMonth = monthNames[today.getMonth()];
currentTime = today.getHours() + ":" + today.getMinutes();
currentDate = dayOfWeek + ", " + today.getDate() + " " + currentMonth;

currentTimeDoc.textContent = currentTime;
currentDateDOc.textContent = currentDate;