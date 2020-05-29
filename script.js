// time variable - timer (this will double as score variable)

// When start button is clicked (add an event listener), start a timer.

// When start button is clicked, present user with first question

// When user selects answer to question, present user with correct or incorrect for 1 second.

// When user answers question, wait 1 second before moving onto next question

// If user answers question incorrectly, then subtract 10 seconds from time variable

// when last question is answered, capture and grab time variable which is the final score.

// Store this score in memory with ability to label it (think object with key and value)

var startbtn = document.getElementById('startbutton');
var instructions = document.getElementById('begin-text');
var timer = document.getElementById("timer");
var timerdiv = document.getElementById("countdown-timer");
var questiondiv = document.getElementById("question-container");


startbtn.addEventListener('click', startGame);

// Starting the game function. Starts the timer and hides instructions when start is clicked
function startGame() {
    console.log("started");
    instructions.classList.add("hide");
    timerdiv.classList.remove("hide");
    scoreTimer();
    // show first question
    questiondiv.classList.remove("hide");
};

// Creating the timer
function scoreTimer() {
    var secondsLeft = 120;
    var timerinterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if (secondsLeft === 0) {
            alert("your out of time!")
            clearInterval(timer);
        }
    }, 1000);
}

