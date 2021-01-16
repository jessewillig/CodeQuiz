var home = document.querySelector(".home");
var scores = document.querySelector(".scores");
var play = document.querySelector(".play");
var start = document.querySelector(".start")
var game = document.querySelector(".game")
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
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

home.addEventListener("click", function() {
    // If/else statement for home button
    if (home === true) {
        // If on home screen, refresh page
        
    } else { 
        // If not on home screen, return to home screen
        
    }
}