// variables to reference the DOM elements

var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

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

// This is our logic 
// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15; 
var timerId;



// start Quiz function, a way to start the quiz 

function startQuiz() {
    // hide the start screen when you hit play
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");

    // un-hide question section 
    questionsEl.removeAttribute("class");

    // start timer
    timerId = setInterval(clockTick, 1000);

    // show starting time
    timerEl.textContent = time;
    getQuestions();
};

// a function for retreiving the questions
function getQuestions() {
    // choicesEl.addEventListener("click");
    // buttons.style.display = "block";
    // for (var i = 0; i < questions.length; i++) {
    //     ansBtn1.textContent = questions[currentQuestionIndex].choices[0];
    //     ansBtn2.textContent = questions[currentQuestionIndex].choices[1];
    //     ansBtn3.textContent = questions[currentQuestionIndex].choices[2];
    //     ansBtn4.textContent = questions[currentQuestionIndex].choices[3];
        
    // };
    // get current question object from the array
    var currentQuestion = questions[currentQuestionIndex];

    // update title with current question
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;

    // clear out any old question choices
    choicesEl.innerHTML = "";

    // loop over the question choices
    currentQuestion.choices.forEach(function(choice, i) {
        // create new button for each choice
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);

        choiceNode.textContent = i + 1 + ". " + choice;

        // add click event listener to each choice
        choiceNode.onclick = questionClick;

        // display on page 
        choicesEl.appendChild(choiceNode);
    });
};
// function for the action of clicking questions 

function questionClick() {
 // check if the user guessed wrong or answered wrong
if (this.value !== questions[currentQuestionIndex].answer) {
// decrease time by 15 
time -= 15;
if (time < 0){
    time =0;
}
 // display new time on page
timerEl.textContent = time;

feedbackEl.textContent = "Wrong";


 } else {
     feedbackEl.textContent = "Correct";
 }

 // display correct or incorrect response
 feedbackEl.setAttribute("class", "feedback");
 setTimeout(function() {
     feedbackEl.setAttribute("class", "feedback hide")
;}, 1000);

// move to next question by incrementing 
currentQuestionIndex++;

// check if we're at the end of our questionaire 
if (currentQuestionIndex === questions.length) {
quizEnd();
} else {
    getQuestions();
}
}


// function for ending the quiz
function quizEnd() {
    // stop the timer 
    clearInterval(timerId);
    // show end screen
    var endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute("class");
    // display the final score

    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;
    // hide the questions
    questionsEl.setAttribute("class", "hide");

};

// function that shows some sort of clock ticking 
function clockTick() {
    // decreasing time update
    time--;
    timerEl.textContent = time;
    //check if the use ran out of time 
    if (time <= 0) {
        quizEnd();
    }
};

// function for saving highscores
function saveHighscore() {
    // get value of the input box
    var initials = initialsEl.value.trim();
    // make sure there is an actual value 
    if (initials !== "") { 
        // get scores from localstorage, make sure to parse, and if there is no values set to empty array
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

        var newScore = {
            score: time,
            initials: initials
        };

        // we need to save to local storage
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));

        //redirect to next page
        window.location.href = "highScores.html";

    }
};

function checkForEnter(event) {
    if(event.key === "Enter") {
        saveHighscore();
    }
}

// user clicks button to submiti i
submitBtn.onclick = saveHighscore;
// user clicks button to start quiz
startBtn.onclick = startQuiz;
initialsEl.onkeyup = checkForEnter;