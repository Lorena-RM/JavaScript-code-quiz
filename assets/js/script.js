//declare quaryselectors

//start page query selectors
const timerEl = document.querySelector(".timer")
const title = document.querySelector(".title");
const info = document.querySelector(".instructions");
const startbtn = document.querySelector(".btn");
//questions query selectors
const questionSec = document.querySelector("#question-section");
const questionEl = document.querySelector(".question");
const options = document.querySelector(".optionsArea");
const wrongOrRight = document.querySelector(".correct-wrong");//displays right or wrong
const currentScore = document.querySelector("#current-score");//shows score in question sec
//Final score query selectors

const finalScore = document.querySelector("#final-score");//identify specific div
//const highScoresbutton = document.querySelector(".Highscore");


const displayEndScore = document.querySelector("#scoreDisplay");//appends end score
const submitButton = document.querySelector(".submit");//button to submit scores
const userInfoInput = document.querySelector("#initials");//input where user puts initials

//declaring lets
let timer;
let score = 0;
//let initials = "";
let timeLeft = 30;
let currentQuestion = 0;

let gameScore = localStorage.getItem("Game-Score")


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
    {
        question: "String Values must be enclosed within ___ when being assigned to variables.",
        answers: [
            { text: "commas", correct: false },
            { text: "curly brackets", correct: false },
            { text: "quotes", correct: true },
            { text: "parentheses", correct: false },
        ]
    },
    {
        question: "a very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            { text: "console.log", correct: true },
            { text: "terminal/ bash", correct: false },
            { text: "for loops", correct: false },
            { text: "JavaScript", correct: false },
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
        timerEl.textContent = "timer: " + timeLeft + " Seconds Remaining";

        if (timeLeft <= 0) {
            endGame();
            timerEl.textContent = `timer: 0 Seconds Remaining`;
        }
    }, 1000);
    //shows first question
    showQuestion();

    // if (!JSON.parse(localStorage.getItem("initials"))){
    //     var ary1 = [];
    //     var ary2 = [];
    //     localStorage.setItem("initials",ary1);
    //     localStorage.setItem("Game-Score",ary2);
    // };
};

// THEN a timer starts and I am presented with a question
function showQuestion() {
    currentScore.textContent = `score: ${score}`;
    questionSec.classList.remove("hidden");
    questionEl.textContent = questions[currentQuestion].question;
    options.innerHTML = '';//ASK!
    //wrongOrRight.innerHTML = " ";
    questions[currentQuestion].answers.forEach(answer => {
        //create a button
        const optionButton = document.createElement('button');
        optionButton.textContent = answer.text;
        optionButton.classList.add('btn');
        optionButton.dataset.correct = answer.correct;
        optionButton.addEventListener("click", evaluateAnswer)
        options.append(optionButton)

    })
}


function evaluateAnswer(event) {
    event.preventDefault();
    //evaluate whether correct and apply points to score
    var isCorrect = event.target.dataset.correct;

   
    //console.log(isCorrect)
    if(isCorrect === "true"){
        //console.log("correct");
        wrongOrRight.textContent = "Right!"
        //add points to score
        score += 20;
        currentScore.textContent = `score: ${score}`;
    } else {
        //console.log("incorrect")
        wrongOrRight.textContent = "Wrong!";
        timeLeft -= 10;
        timerEl.textContent = `timer: ${timeLeft} Seconds Remaining`;
    }

    //trigger the next question to appear
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
        //questionSec.correct-answer.innerHTML 
    } else {
        endGame()
        timerEl.textContent = `timer: 0 Seconds Remaining`;
    }
}

function endGame() {
    //stopping the timer
    clearInterval(timer);
    //hide question section
    questionSec.classList.add("hidden");
    finalScore.classList.remove("hidden");

    //create p tag inside of div
    const endScore = document.createElement('p');
    endScore.classList.add("end-score");
    endScore.textContent = `your final score is: ${score}`;
    displayEndScore.append(endScore);

    let scoreArray = [];
    if (!gameScore) {
        scoreArray.push(score);
        localStorage.setItem("Game-Score", JSON.stringify(scoreArray));
    
    } else {
        scoreArray = scoreArray.concat(JSON.parse(gameScore)|| 0);
        scoreArray.push(score);
        localStorage.setItem("Game-Score", JSON.stringify(scoreArray));
    }
    

    
    //show the score entry form
}

submitButton.addEventListener("click", function(event) {
    //event.preventDefault();

    var userInput = userInfoInput.value.trim();
    var gameInitial = localStorage.getItem("initials");
    let initialArray = [];
    if (!gameInitial) {
        initialArray.push(userInput);
        localStorage.setItem("initials", JSON.stringify(initialArray));
    
    } else {
        initialArray = initialArray.concat(JSON.parse(gameInitial)|| 0);
        initialArray.push(userInput);
        localStorage.setItem("initials", JSON.stringify(initialArray));
    }
    
});


// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score



