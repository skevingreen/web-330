'use strict';
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Scott Green
      Date: October 26, 2024

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
// Timer Class Constructor Function
function timer(min, sec) {
  this.minutes = min;
  this.seconds = sec;
  this.timeID = null;
}

// Timer method to run or pause the timer
timer.prototype.runPause = function (timer, minBox, secBox) {
  if (timer.timeID) {
    window.clearInterval(timer.timeID);
    timer.timeID = null;
  } else {
    timer.timeID = window.setInterval(countdown, 1000);
  }

  // Function to decrement the counter
  function countdown() {
    if (timer.seconds > 0) {
      timer.seconds -= 1;
    } else if (timer.minutes > 0) {
      timer.minutes -= 1;
      timer.seconds = 59;
    } else {
      window.clearInterval(timer.timeID);
      timer.timeID = null;
    }

    minBox.value = timer.minutes;
    secBox.value = timer.seconds;
  }
};

/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById('minutesBox');
let secBox = document.getElementById('secondsBox');
let runPauseTimer = document.getElementById('runPauseButton');

// Create an instance of a timer
let myTimer = new timer(minBox.value, secBox.value);

// Set the timer's minutes value if it changes
minBox.onchange = function () {
  myTimer.minutes = minBox.value;
};

// Set the timer's  seconds value if it changes
secBox.onchange = function () {
  myTimer.seconds = secBox.value;
};

// Start or pause the timer
runPauseTimer.onclick = function () {
  myTimer.runPause(myTimer, minBox, secBox);
};
