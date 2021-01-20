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
var answer1 = document.querySelector(".answer1");
var answer2 = document.querySelector(".answer2");
var answer3 = document.querySelector(".answer3");
var answer4 = document.querySelector(".answer4");
var question = document.querySelector(".question");
var ansBtn = document.querySelector("#ansBtn");
var buttons = document.querySelector(".buttons");
var quesCounter = 0;
var intervalId;
var rightAnswer = 0;
var wrongAnswer = 0;
var notAnswered = 0;
var currentQues;
// questions/answers
var questions = [
    {
        title: "Inside which HTML element do we put the JavaScript?",
        options: ["<js>", "<script>", "<javascript>", "<scripting>"],
        answer: "<script>"
    },
    {
        title: "Which of the following is a valid type of function javascript supports?",
        options: ["Named function", "Anonymous function", "Both of the above.", "None of the above."],
        answer: "Both of the above."
    },
    {
        title: "Which built-in method removes the last element from an array and returns that element?",
        options: ["last()", "get()", "pop()", "None of the above."],
        answer: "pop()"
    },
    {
        title: "Which built-in method reverses the order of the elements of an array?",
        options: ["changeOrder(order)", "reverse()", "sort(order)", "None of the above."],
        answer: "reverse()"
    }
];
var questLength = questions.length;

// Play button to start the game
playBtn.addEventListener("click", function () {
    console.log("clicked");
    quesAns(quesCounter);
});

// Right answers counter
function right() {
        // ansBtn.addEventListener("click");
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
        // ansBtn.addEventListener("click");
        console.log("inside wrong");
        buttons.style.visibility = "hidden";
        question.textContent = "Wrong!";
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
    showQuestion.textContent = "Game Over! Here's your score.";
    answer1.textContent = "Correct answers: " + rightAnswer;
    answer2.textContent = "Wrong answers: " + wrongAnswer;
    answer3.textContent = "Not answered: " + notAnswered;
    answer4.textContent = "Play Again!";
    answer4.addEventListener("click", function () {
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
        answer1.textContent = questions[quesCounter].options[0];
        answer2.textContent = questions[quesCounter].options[1];
        answer3.textContent = questions[quesCounter].options[2];
        answer4.textContent = questions[quesCounter].options[3];    
    };
};

ansBtn.addEventListener("click", function() {
    console.log(ansBtn.textContent === questions[quesCounter].answer);
    if (ansBtn.textContent === questions[quesCounter].answer) {
        right();
    } else {
        wrong();
    };
});