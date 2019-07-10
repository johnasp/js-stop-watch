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
    leadingZero();
    secCounter++;
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
        stopStart = setInterval(startClock,10);
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
    secCounter = 0;
    minsField.innerHTML =  0;
    minCounter = 0;
    hoursField.innerHTML =  0;
    hourCounter = 0;

};

// Leading zero function
// If its a single digit number, convert number to string, add leading zero and finally replace seconds element with this value

function leadingZero($array, $arrayCount, $field) {
    if (secs[secCounter] < 10) { //check  if the value in the array is less than ten
        var prePendZero = secs[secCounter]; // Capture the array value into an object
        prePendZero = prePendZero.toString();  // Convert data type from number to string to enable addition of leading zero
        prePendZero = "0" + prePendZero; // Add leading to zero to number 
        secsField.innerHTML = prePendZero; // Change the text in field to the value of the variable
    }
    else {
        secsField.innerHTML = secs[secCounter];  // Run the text field change as usual
    }
}

