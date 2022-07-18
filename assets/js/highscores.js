const lastPlayedGame = document.querySelector(".last-played-game");

function renderMessage() {
    var getItem = JSON.parse(localStorage.getItem("Game-Score"));
    
    for (let index = 0; index < getItem.length; index++) {
    const initials = JSON.parse(localStorage.getItem("initials"));
    const storedInfo = document.createElement("li");
    storedInfo.textContent = initials[index];
    lastPlayedGame.append(storedInfo);

    const highScores = JSON.parse(localStorage.getItem("Game-Score"));
    const storedInfo2 = document.createElement("li");
    storedInfo2.textContent = highScores[index];
    lastPlayedGame.append(storedInfo2);
    }
}

function clearScores (){
    localStorage.removeItem("initials");
    localStorage.removeItem("Game-Score");
    renderMessage();
}

document.querySelector("#clear").addEventListener("click", clearScores);
renderMessage ();