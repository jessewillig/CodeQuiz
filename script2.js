// This is our logic 
// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = question.length * 15; 
var timerId;

// variables to reference the DOM elements

var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = dpcument.getElementById("submit");
var startBtn = document.getElementsByClassName("start");
var intialsEl = document.getElementById("intials");
var feedbackEl = document.getElementById("feedback");

// start Quiz function, a way to start the quiz 

function startQuiz() {
    // hide the start screen when you hit play
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");

    // un-hide question section 
    questionsEl.removeAttribute("class");

    // start timer
    timerId = setInterval(clockTick, 1000);

    // shwo starting time
    timerEl.textContent = time;
    getQuestions();
}

// a function for retreiving the questions
function getQuestions() {

}

// function for the action of clicking questions 

function questionClick {

}

// function for right or wrong answer, a second you get feedback
feedbackEl.setAttribute("class", "feedback");
setTimeout(function() {
    feedbackEl.setAttribute
})

// function for ending the quiz
function quizEnd() {

}

// function that shows some sort of clock ticking 
function clockTick() {

}

// function for saving highscores
function saveHighscore() {

}

function checkForEnter(event) {
    if(event.key === "Enter") {
        saveHighscore();
    }
}

// user clicks button to submit intials 
submitBtn.onclick = saveHighscore;
// user clicks button to start quiz
startBtn.onclick = startQuiz;
intialsEl.onkeyup = checkForEnter;