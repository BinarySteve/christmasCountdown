
//set day for countdown to christmas day
var christmasDay = new Date("Dec 25, 2018").getTime();

// Update the count down every 1 second
var x = setInterval(() => {
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var difference = christmasDay - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML =
    days +
    "   Days <br />" +
    hours +
    "   Hours <br />" +
    minutes +
    "   Minutes <br />" +
    seconds +
    "   Seconds";

  // If the count down is finished, christmas is here
  if (difference < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Christmas is here!!";
  }
}, 1000);
