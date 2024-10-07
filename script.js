
const choices = ['rock', 'paper', 'scissors'];
const result = document.getElementById('result1');
const user1 = document.getElementById("username");
const comp = document.getElementById("compname");
let ct=0;
const score = {
    wins:0 ,losses:0 ,ties:0
}

function onclickbutton(user) {
    let res = ""; // Initialize result variable
    const compchoice = choices[Math.floor(Math.random() * choices.length)]; // Random computer choice

    // Tie condition
    if (user === compchoice) {
        res = "It's a tie!";
    } 
    // Win/Loss logic based on user choice
    else {
        switch (user) {
            case "rock":
                if (compchoice === "scissors") {
                    res = "You Win!";
                } else if (compchoice === "paper") {
                    res = "You lose!";
                }
                break;
            case "paper":
                if (compchoice === "rock") {
                    res = "You Win!";
                } else if (compchoice === "scissors") {
                    res = "You lose!";
                }
                break;
            case "scissors":
                if (compchoice === "paper") {
                    res = "You Win!";
                } else if (compchoice === "rock") {
                    res = "You lose!";
                }
                break;
        }
    }

    // Displaying user and computer choices
    user1.textContent = `PLAYER: ${user}`;
    comp.textContent = `COMPUTER PLAYER: ${compchoice}`;
    ct=res
    
    // Display the result
    result.textContent = res;
    if (res ==="You Win!" ){
        score.wins=score.wins + 1;
    }    
    else if (res === "You lose!" ){
        score.losses=score.losses + 1;
    }
    else{
        score.ties=score.ties + 1;
    }
    
    document.getElementById("scoreboard").textContent=`you wins:${score.wins}\n \n 
    You lose:${score.losses}\n \n 
    its tie:${score.ties}`;
}
