// Grab the content of the time unit elements
var secsField = document.getElementById("seconds");
var minsField = document.getElementById("mins");
var hoursField = document.getElementById("hours");

// Create arrays to hold time units
var secs = [];
var mins = [];
var hours = [];

// Array stuffers
for (i = 0; i < 60; i++) {
    secs[i] = i;
    mins[i] = i;
}
for (j = 0; j <=24; j++) {
    hours[j] = j;
}

// Create time unit counter variables
var secCounter = 0;
var minCounter = 1;
var hourCounter = 1;

// The 'clock' functions
function startClock(){
    if (secCounter >=  60) {
        secCounter = 0; 
        changeMinutes();
    }
    addLeadingZero(secs[secCounter], secsField);
    secCounter++;
}
function changeMinutes(){
    if (minCounter >= 60){
        minCounter = 0;
        changeHours();
    }
    addLeadingZero(mins[minCounter], minsField);
    minCounter++; 
}
function changeHours(){
    if (hourCounter >= 24) {
        hourCounter = 0
    }
    addLeadingZero(hours[hourCounter], hoursField);
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
    secsField.innerHTML =  "00";
    secCounter = 0;
    minsField.innerHTML =  "00";
    minCounter = 0;
    hoursField.innerHTML = "00";
    hourCounter = 0;

};
//Add leading zero to single digit numbers

function addLeadingZero($arr, $textField) {
    if ($arr < 10) { //check  if the value in the array is less than ten
        var prePendZero = $arr; // Capture the array value into an object
        prePendZero = prePendZero.toString();  // Convert data type from number to string to enable addition of leading zero
        prePendZero = "0" + prePendZero; // Add leading to zero to number 
        $textField.innerHTML = prePendZero; // Change the text in field to the value of the variable
    }
    else {
        $textField.innerHTML = $arr;  // Run the text field change as usual
    }
}

