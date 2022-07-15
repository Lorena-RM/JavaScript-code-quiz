//declare quaryselectors

//start page query selectors
const timerEl = document.querySelector (".timer")
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

//declaring lets
let timer;
let Gamescore;
let score = 0;
let initials = "";
let timeLeft = 50;

//let highscores = JSON.parse(localStorage.getItem("highscores")) || [0];

//declare question array
//


startbtn.addEventListener("click", startGame);
    //highScoresbutton.addEventListener("click", displayscores);

    //Functions to begin the Game
    // WHEN I click the start button
    function startGame(){
        //hide start button and instructions
        startbtn.classList.add("hidden");
        title.classList.add("hidden");
        info.classList.add("hidden");

        //add timer after start game btn clicked
        var timer = setInterval(() => {
            timeLeft--;
            timerEl.textContent = "timer: " + timeLeft + " seconds remaining";

            if(timeLeft <= 0) {
                //endGame();
                clearInterval(timer);
            }
        }, 1000);
        //shows first question
        showQuestionAry();
    };
    // THEN a timer starts and I am presented with a question
    function showQuestionAry() {
        
    }




// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score



