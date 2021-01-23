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
var ansBtn1 = document.getElementById("#ansBtn1");
var ansBtn2 = document.getElementById("#ansBtn2");
var ansBtn3 = document.getElementById("#ansBtn3");
var ansBtn4 = document.getElementById("#ansBtn4");
var questionPage = document.getElementsByClassName(".questionPage");
var choicesBtn = document.getElementsByClassName(".choices");

// variables for questions

var questions = [
    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: ["<js>", "<script>", "<javascript>", "<scripting>"],
        answer: "<script>"
    },
    {
        title: "Which of the following is a valid type of function javascript supports?",
        choices: ["Named function", "Anonymous function", "Both of the above.", "None of the above."],
        answer: "Both of the above."
    },
    {
        title: "Which built-in method removes the last element from an array and returns that element?",
        choices: ["last()", "get()", "pop()", "None of the above."],
        answer: "pop()"
    },
    {
        title: "Which built-in method reverses the order of the elements of an array?",
        choices: ["changeOrder(order)", "reverse()", "sort(order)", "None of the above."],
        answer: "reverse()"
    }
];

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
};

// a function for retreiving the questions
function getQuestions() {
    buttons.style.display = "block";
    for (var i = 0; i < questions.length; i++) {
        ansBtn1.textContent = questions[].choices[0];
        ansBtn2.textContent = questions[].choices[1];
        ansBtn3.textContent = questions[].choices[2];
        ansBtn4.textContent = questions[].choices[3];
        
    };
}
;
// function for the action of clicking questions 

function questionClick {

};

// function for right or wrong answer, a second you get feedback
feedbackEl.setAttribute("class", "feedback");
setTimeout(function() {
    feedbackEl.setAttribute;
});

// function for ending the quiz
function quizEnd() {

};

// function that shows some sort of clock ticking 
function clockTick() {

};

// function for saving highscores
function saveHighscore() {

};

function checkForEnter(event) {
    if(event.key === "Enter") {
        saveHighscore();
    };
};

// user clicks button to submit intials 
submitBtn.onclick = saveHighscore;
// user clicks button to start quiz
startBtn.onclick = startQuiz;
intialsEl.onkeyup = checkForEnter;