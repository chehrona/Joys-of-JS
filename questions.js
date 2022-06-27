let questionsArr = [
    {q: "Is Niagara the tallest waterfall in the world?", a: "f"},
    {q: "Are there 60 minutes in one hour?", a: "t"},
    {q: "Is Toronto located in Canada?", a: "t"},
    {q: "Is Grand Canyon located in China?", a: "f"}
    ];

// console.log(questionsArr[0].q)
let score = 0;
let questionNumber = 0;

let instructions = document.getElementsByClassName("instructions");
let question = document.getElementById("questions");
let finalScore = document.getElementById("results");


function printQuestions() {
    if (questionNumber <= (questionsArr.length - 1)) {
        question.textContent = questionsArr[questionNumber].q;
    } else {
        question.textContent = "Game over!"
        finalScore.textContent = "Final Score: " + score + "/" + questionsArr.length;
}
}


function scoreTracker() {
    finalScore.textContent = "Score: " + score;
}

printQuestions();
scoreTracker();

document.onkeyup = function (event) {
    if (questionNumber === questionsArr.length) {
        return;
    }
    if ((event.key === "t") || (event.key === "f")) {
        if (event.key === questionsArr[questionNumber].a) {
            alert("You got it right!");
            score++;
            scoreTracker();
        } else if (event.key !== questionsArr[questionNumber].a) {
            alert("Wrong");
        }
    questionNumber++;
    printQuestions();
    }
}



