//declare quaryselectors

//start page query selectors
const timerEl = document.querySelector(".timer")
const title = document.querySelector(".title");
const info = document.querySelector(".instructions");
const startbtn = document.querySelector(".btn");
//questions query selectors
const questionSec = document.querySelector("#question-section");
const questionEl = document.querySelector(".question")
const options = document.querySelector(".optionsArea")
//Final score query selectors
const finalScore = document.querySelector("#final-score");
const highScoresbutton = document.querySelector(".viewHighscores");
const currentScore = document.querySelector("#current-score");

//declaring lets
let timer;
let Gamescore;
let score = 0;
let initials = "";
let timeLeft = 50;
let currentQuestion = 0;

//let highscores = JSON.parse(localStorage.getItem("highscores")) || [0];

//declare question array
const questions = [
    {
        question: "commonly used data types DO NOT include: ",
        answers: [
            { text: "alerts", correct: true },
            { text: "booleans", correct: false },
            { text: "numbers", correct: false },
            { text: "strings", correct: false },
        ]
    },
    {
        question: "The condition in an if / else statement is enclosed within ______. ",
        answers: [
            { text: "quotes", correct: false },
            { text: "curly brackets", correct: false },
            { text: "parantheses", correct: true },
            { text: "square brackets", correct: false },
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store _____. ",
        answers: [
            { text: "numbers and strings", correct: false },
            { text: "other Arrays", correct: false },
            { text: "booleans", correct: false },
            { text: "all of the above", correct: true },
        ]
    },

]


startbtn.addEventListener("click", startGame);


//Functions to begin the Game
// WHEN I click the start button
function startGame() {
    //hide start button and instructions
    startbtn.classList.add("hidden");
    title.classList.add("hidden");
    info.classList.add("hidden");
    timerEl.textContent = `timer: ${timeLeft} Seconds Remaining`;
    timerEl.classList.remove("hidden");

    //add timer after start game btn clicked
    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = "timer: " + timeLeft + " seconds remaining";

        if (timeLeft <= 0) {
            endGame();
            timerEl.textContent = `timer: 0 Seconds Remaining`;
        }
    }, 1000);
    //shows first question
    showQuestion();
};
// THEN a timer starts and I am presented with a question
function showQuestion() {
    currentScore.textContent = `score: ${score}`;
    questionSec.classList.remove("hidden");
    questionEl.textContent = questions[currentQuestion].question;
    options.innerHTML = '';//ASK!
    questions[currentQuestion].answers.forEach(answer => {
        //create a button
        const optionButton = document.createElement('button');
        optionButton.textContent = answer.text;
        optionButton.classList.add('btn');
        optionButton.dataset.isCorrect = answer.correct;
        optionButton.addEventListener("click", evaluateAnswer)
        options.append(optionButton)

    })
}


function evaluateAnswer(event) {
    //evaluate whether correct and apply points to score
    const isCorrect = event.target.dataset.isCorrect;
    //console.log(isCorrect)
    if(isCorrect){
        console.log("correct");
        //add points to score
        //+= adds the following #
        score += 20;
        currentScore.textContent = `score: ${score}`;
    } else {
        console.log("incorrect")
        //take time away
        timeLeft -= 5;
        timerEl.textContent = `timer: ${timeLeft} Seconds Remaining`;
    }

    //trigger the next question to appear
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        endGame()
    }
}

function endGame() {
    //stopping the timer
    clearInterval(timer);
    //hide question section
    questionSec.classList.add("hidden");
    finalScore.classList.remove("hidden");

    //show the score entry form

}

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score



