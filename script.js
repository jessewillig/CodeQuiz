// Home button
var homeBtn = document.querySelector(".homeBtn");
// High scores button
var scoresBtn = document.querySelector(".scoresBtn");
// Play button to start the game
var playBtn = document.querySelector(".playBtn");
// Home/Start page where you can click play or look at the high scores
var startPage = document.querySelector(".startPage")
// Page that hides the "home" page and shows the questions and answers to pick
var gamePlay = document.querySelector(".gamePlay")
// Answers 1, 2, 3 & 4 buttons

// variables to reference DOM elements 
var ansBtn1 = document.querySelector("#ansBtn1");
var ansBtn2 = document.querySelector("#ansBtn2");
var ansBtn3 = document.querySelector("#ansBtn3");
var ansBtn4 = document.querySelector("#ansBtn4");
var question = document.querySelector(".question");
var answer = document.querySelector(".answer");
var buttons = document.querySelector(".buttons");
var quesCounter = 0;
var intervalId;
var rightAnswer = 0;
var wrongAnswer = 0;
var notAnswered = 0;
var currentQues;

// timer varaibles
// variables to keep track of quiz state
var currentQuestionINDEX = 0;
var time = questions.length *15;
var timerId; 


// questions/answers
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
var questLength = questions.length;

// Play button to start the game
playBtn.addEventListener("click", function () {
    startPage.style.display = "none";
    console.log("clicked");
    quesAns(quesCounter);
});

// Right answers counter
function right() {
        answer.addEventListener("click");
        console.log("inside right");
        buttons.style.visibility = "hidden";
        question.textContent = "Right!";
        quesCounter++;
        rightAnswer++;
        clearInterval(intervalId);
        if (quesCounter === questLength) {
            setTimeout(endGame, 1000 * 2);
        } else {
            setTimeout(quesAns(quesCounter), 1000 * 2);
        };
    };

// Wrong answers counter
function wrong() {
        // answer.addEventListener("click");
        console.log("wrong");
        // buttons.style.visibility = "hidden";
        // question.textContent = "Wrong!";
        quesCounter++;
        wrongAnswer++;
        clearInterval(intervalId);
        if (quesCounter === questLength) {
            console.log("ques count = ques length");
            setTimeout(endGame, 1000 * 2);
        } else {
            console.log("ques count doesn't = ques length");
            setTimeout(quesAns(quesCounter), 1000 * 2);
        };
    };

// End game timer
function endTimer() {
        ansBtn.addEventListener("click");
        buttons.style.display = "none";
        question.textContent = "Wrong!";
        quesCounter++;
        notAnswered++;
        clearInterval(intervalId);
        if (quesCounter == questLength) {
            setTimeout(endGame, 1000 * 2);
        } else {
            setTimeout(quesAns, 1000 * 2);
        };
    };

// End game, total up right, wrong and not answered questions.
function endGame() {
    gamePlay.style.display = "block";
    question.textContent = "Game Over! Here's your score.";
    ansBtn1.textContent = "Correct answers: " + rightAnswer;
    ansBtn2.textContent = "Wrong answers: " + wrongAnswer;
    ansBtn3.textContent = "Not answered: " + notAnswered;
    ansBtn4.textContent = "Play Again!";
    ansBtn4.addEventListener("click", function () {
        resetGame();
        quesDisplay();
    });
};

// Reset game to play again
function resetGame() {
        quesCounter = 0;
        rightAnswer = 0;
        wrongAnswer = 0;
        notAnswered = 0;

        return quesCounter;
        return rightAnswer;
        return wrongAnswer;
        return notAnswered;
    };

// Show questions/answers to choose and move to next question
function quesAns(quesCounter) {
    console.log("quesCounter = ", quesCounter);
    buttons.style.visibility = "visible";
    var gameTimer = 60;
    intervalId = setInterval(decrement, 1000);
    function decrement() {
        gameTimer--;
        timer.innerHTML = timer;
        if (timer === 0) {
            endTimer();
        };
    };
    for (var i = 0; i < questLength; i++) {
        gamePlay.style.display = "block";
        question.textContent = questions[quesCounter].title;
        ansBtn1.textContent = questions[quesCounter].options[0];
        ansBtn2.textContent = questions[quesCounter].options[1];
        ansBtn3.textContent = questions[quesCounter].options[2];
        ansBtn4.textContent = questions[quesCounter].options[3];    
        answer.addEventListener("click", function() {
            // console.log(answer.textContent === questions[quesCounter].answer);
            console.log("clicked");
            if (answer.textContent === questions[quesCounter].answer) {
                right();
            } else {
                wrong();
            };
        });
    };
};
