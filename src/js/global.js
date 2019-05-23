// Grab the content of the time unit elements
var secsField = document.getElementById("seconds");
var minsField = document.getElementById("mins");
var hoursField = document.getElementById("hours");

// Create arrays to hold time units
var secs = [];
var mins = [];
var hours = [];

// Add 0-60 to each of the min and hour arrays
for (i = 0; i < 60; i++) {
    secs[i] = i;
    mins[i] = i;
}

//  Add 0-24 into the hour array
for (j = 0; j <=24; j++) {
    hours[j] = j;
}

// Create time unit counter variables
var counter = 0;
var minCounter = 1;
var hourCounter = 1;

// The 'clock' functions
function startClock(){
    if (counter >=  60) {
        counter = 0; 
        changeMinutes();
    }
    secsField.innerHTML = secs[counter];
    counter++;
}
function changeMinutes(){
    if (minCounter >= 60){
        minCounter = 0;
        changeHours();
    }
    minsField.innerHTML = mins[minCounter];
    minCounter++; 
}
function changeHours(){
    if (hourCounter >= 24) {
        hourCounter = 0
    }
    hoursField.innerHTML = hours[hourCounter];
    hourCounter++;
}

// Capture the start button element into a variable
var startButton = document.getElementById("start");

// Start and stop the clock when button is pressed
stopStart = 0;
startButton.onclick = function(){
    if (stopStart === 0) {
        stopStart = setInterval(startClock,1000);
        console.log("clock started");
    }  
    else {
        clearInterval(stopStart);
        stopStart = 0;
        startButton.document.innerHTML("START");
        console.log("STOPPED");
    }
}
