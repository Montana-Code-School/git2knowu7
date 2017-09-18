
var button = document.getElementById('clickMe')
button.addEventListener("click", myFunction);

function myFunction() {
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
    minutes = '0' +  minutes;
  }
    alert ("The time is " + hours + ":" + minutes + " " + cycle);
}
/*
function formatMinutes(minutes){
  if(minutes <= 9){
    return '0' + minutes;
  } else {
    return minutes
  }
}
*/
