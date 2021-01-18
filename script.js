var homeBtn = document.querySelector(".homeBtn");
var scoresBtn = document.querySelector(".scoresBtn");
var playBtn = document.querySelector(".playBtn");
var startPage = document.querySelector(".startPage")
var gamePlay = document.querySelector(".gamePlay")
var answer1 = document.querySelector(".answer1");
var answer2 = document.querySelector(".answer2");
var answer3 = document.querySelector(".answer3");
var answer4 = document.querySelector(".answer4");
var question = document.querySelector(".question");
var ansBtn = document.querySelector("#ansBtn");
var quesCounter = 0;
// questions/answers
var questions = [
    {
        title: "Which of the following is correct about JavaScript?",
        options: ["JavaScript is a lightweight, interpreted programming language.", "JavaScript has object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.", "The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.", "All the above."],
        answer: "All the above."
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

gamePlay.style.display = "none";

playBtn.addEventListener("click", function() {
    quesAns();
}

function right() {
    
}

function wrong() {
    
}

function quesAns(quesCounter) {
    gamePlay.style.display = "block";
    question.textContent = questions[quesCounter].title;
    answer1.textContent = questions[quesCounter].options[0];
    answer2.textContent = questions[quesCounter].options[1];
    answer3.textContent = questions[quesCounter].options[2];
    answer4.textContent = questions[quesCounter].options[3];
}
