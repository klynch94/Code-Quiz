// variables for starting the game and timer
var startbtn = document.getElementById('startbutton');
var instructions = document.getElementById('begin-text');
var timer = document.getElementById("timer");
var timerdiv = document.getElementById("countdown-timer");
var questiondiv = document.getElementById("question-container");
var i = 0;
var timerInterval;
var ending = document.getElementById("endingMessage");
var finalScore = document.getElementById("finalScore");
var secondsLeft = 120;


// Question objects
var questionArray = [
    {
        q: "Which element is a self-closing tag?",
        answer1: "<p>",
        answer2: "<div>",
        answer3: "<img>",
        answer4: "<h1>",
        qanswer: "<img>"
    },
    {
        q: "As a best practice, where should you link your JavaScript into your HTML?",
        answer1: "At the top of the 'Head' section",
        answer2: "At the bottom of the 'Body' section",
        answer3: "Within a <div> at the top of the 'Body' section",
        answer4: "At the end of the 'Head' section",
        qanswer: "At the bottom of the 'Body' section"
    },
    {
        q: "What is your favorite website?",
        answer1: "Google",
        answer2: "yahoo",
        answer3: "msn.com",
        answer4: "facebook",
        qanswer: "Google"
    },
    {
        q: "Question 4?",
        answer1: "1",
        answer2: "2",
        answer3: "3",
        answer4: "4",
        qanswer: "1"
    }
];


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
    timerInterval = setInterval(function () {
        secondsLeft--;
        displayQuestion();
        timer.textContent = secondsLeft;

        if (secondsLeft === 0) {
            alert("your out of time!")
            clearInterval(timerInterval);
        }
    }, 1000);
}

// function to display questions dynamically
function displayQuestion() {

    if (i < questionArray.length) {
        document.getElementById("questions").textContent = "";
        document.getElementById("btnAnswers").textContent = "";

        var questionP = document.createElement("p")
        questionP.innerText = questionArray[i].q;
        document.getElementById("questions").appendChild(questionP)

        var answer1Btn = document.createElement("button")
        answer1Btn.innerText = questionArray[i].answer1;
        answer1Btn.setAttribute("class", "answer-btns btn btn-primary")
        document.getElementById("btnAnswers").appendChild(answer1Btn)

        var answer2Btn = document.createElement("button")
        answer2Btn.innerText = questionArray[i].answer2;
        answer2Btn.setAttribute("class", "answer-btns btn btn-primary")
        document.getElementById("btnAnswers").appendChild(answer2Btn)

        var answer3Btn = document.createElement("button")
        answer3Btn.innerText = questionArray[i].answer3;
        answer3Btn.setAttribute("class", "answer-btns btn btn-primary")
        document.getElementById("btnAnswers").appendChild(answer3Btn)

        var answer4Btn = document.createElement("button")
        answer4Btn.innerText = questionArray[i].answer4;
        answer4Btn.setAttribute("class", "answer-btns btn btn-primary")
        document.getElementById("btnAnswers").appendChild(answer4Btn)

        // Taken from https://flaviocopes.com/add-click-event-to-dom-list/
        const buttons = document.querySelectorAll(".answer-btns")
        for (const button of buttons) {
            button.addEventListener('click', function (event) {
                i++
            })
        }
    }
    else {
        clearInterval(timerInterval);
        questiondiv.classList.add("hide");
        timerdiv.classList.add("hide");
        console.log(timerInterval);
        // grab timerinterval and set that as the score
        finalScore.innerText = secondsLeft;
        ending.classList.remove("hide");
    }
}

// add an eventlistener onto submit button. 
// then create a highscores page.

// add the score and initial into a list on the highscores page.
// save the score and initials into local storage.



