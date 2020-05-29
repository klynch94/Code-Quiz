// time variable - timer (this will double as score variable)

// When start button is clicked (add an event listener), start a timer.

// When start button is clicked, present user with first question

// When user selects answer to question, present user with correct or incorrect for 1 second.

// When user answers question, wait 1 second before moving onto next question

// If user answers question incorrectly, then subtract 10 seconds from time variable

// when last question is answered, capture and grab time variable which is the final score.

// Store this score in memory with ability to label it (think object with key and value)



// variables for starting the game and timer
var startbtn = document.getElementById('startbutton');
var instructions = document.getElementById('begin-text');
var timer = document.getElementById("timer");
var timerdiv = document.getElementById("countdown-timer");
var questiondiv = document.getElementById("question-container");

// Variables for questions and answers....
var newquestion = document.getElementById("questions");
var firstbtn = document.getElementById("first-btn");
var secondbtn = document.getElementById("second-btn");
var thirdbtn = document.getElementById("third-btn");
var fourthbtn = document.getElementById("fourth-btn");

startbtn.addEventListener('click', startGame);

// Starting the game function. Starts the timer and hides instructions when start is clicked
function startGame() {
    console.log("started");
    instructions.classList.add("hide");
    timerdiv.classList.remove("hide");
    scoreTimer();
    // show first question
    questiondiv.classList.remove("hide");
    firstquestion();
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

function firstquestion() {
    var answerbuttons = document.querySelector(".answer-btns");
    newquestion.innerText = question1.q1;
    firstbtn.innerText = question1.answer1;
    secondbtn.innerText = question1.answer2;
    thirdbtn.innerText = question1.answer3;
    fourthbtn.innerText = question1.answer4;
    // answerbuttons.addEventListener("click", secondquestion());
}




function secondquestion() {
    newquestion.innerHTML = question2.q2;
    firstbtn.innerText = question2.answer1;
    secondbtn.innerText = question2.answer2;
    thirdbtn.innerText = question2.answer3;
    fourthbtn.innerText = question2.answer4;
}



// Question objects
var question1 = {
    q1: "Which element is a self-closing tag?",
    answer1: "<p>",
    answer2: "<div>",
    answer3: "<img>",
    answer4: "<h1>",
}

var question2 = {
    q2: "As a best practice, where should you link your JavaScript into your HTML?",
    answer1: "At the top of the 'Head' section",
    answer2: "At the bottom of the 'Body' section",
    answer3: "Within a <div> at the top of the 'Body' section",
    answer4: "At the end of the 'Head' section",
}



// var question3 = {
//     answer1:
//     answer2:
//     answer3:
//     answer4:
// }

// var question4 = {
//     answer1:
//     answer2:
//     answer3:
//     answer4:
// }