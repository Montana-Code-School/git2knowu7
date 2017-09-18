var time = new Date();
var date = time.getDate();
var hours = time.getHours();
var minutes = time.getMinutes();
var cycle;
if(hours < 12) {
  cycle = "am";
}
else {
  cycle = "pm";
}
switch(hours) {
  case 13:
  hours = 1;
  break;
  case 14:
  hours = 2;
  break;
  case 15:
  hours = 3;
  break;
  case 16:
  hours = 4;
  break;
}
if (minutes <= 9) {
  minutes = minutes.slice(0,1);
}
var button = document.getElementById('clickMe')
button.addEventListener("click", myFunction);

function myFunction() {
    alert ("The time is " + hours + ":" + minutes + " " + cycle);
}
console.log("If the clock is not up to date refresh the page.");
