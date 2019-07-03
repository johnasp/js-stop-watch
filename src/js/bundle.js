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
    // Test for leading zeros, add if necessary
    if (secsField.innerHTML.length === 1) {
        var secLength = secsField.innerHTML.length;
        console.log("Im value " +secsField.innerHTML + " and Im " + secLength + " characters in legnth." )
    }
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

// Start button is pressed
var startButton = document.getElementById("start");
stopStart = 0;
startButton.onclick = function(){
    if (stopStart === 0) {
        stopStart = setInterval(startClock,1000);
        startButton.textContent = "Stop";
        startButton.classList.add("stopped");
        document.querySelector("#reset").style.display="none";
    }  
    else {
        clearInterval(stopStart);
        stopStart = 0;
        startButton.textContent = "Start";
        startButton.classList.remove("stopped");
        document.querySelector("#reset").style.display="inline-block";
    }
}

// Reset the clock 
var resetButton = document.getElementById("reset");
resetButton.onclick = function(){
    secsField.innerHTML =  0;
    counter = 0;
    minsField.innerHTML =  0;
    minCounter = 0;
    hoursField.innerHTML =  0;
    hourCounter = 0;

};

//Prepend zero to single digit numbers 
//Conver static numbersto start with
