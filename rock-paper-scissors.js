
let humanScore = 0;
let computerScore = 0;
let resultsContent = "";

function getComputerChoice()
{
    let choice = Math.floor( Math.random() * 3 ) + 1;
    console.log(choice);
    switch( choice)
    {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function getHumanChoice() 
{
    let choice = prompt("Enter your move:");
    return choice;
}

//Step 5: Write the logic to play a single round
function playRound(event) 
{

    const lHumanChoice = event.target.textContent.toLowerCase().trim();
    const lComputerChoice = getComputerChoice();
    const resultDiv = document.querySelector("#results");

    let newResult = document.createElement("p");
    if (lHumanChoice === lComputerChoice){
        // resultsContent += "It's a tie!\n"; 
        newResult.textContent =   "It's a tie!"; 

    } else if (lHumanChoice === "rock" && lComputerChoice === "paper")
    {
        // resultsContent += "You lose! Paper beats Rock\n"; 
        newResult.textContent =   "You lose! Paper beats Rock\n"; 
        computerScore++;
    }  else if (lHumanChoice === "rock" && lComputerChoice === "scissors")
    {

        //  resultsContent += "You win! Rock beats Scissors\n"; 
         newResult.textContent =   "You win! Rock beats Scissors"; 
        humanScore++;

    } else if (lHumanChoice === "paper" && lComputerChoice === "scissors")
    {

        newResult.textContent =   "You lose! Scissors beats Paper";
        //  resultsContent += "You lose! Scissors beats Paper\n";
        computerScore++;
    } else if (lHumanChoice === "paper" && lComputerChoice === "rock")
    {
        // newResult.textContent =   "You win!  Paper beats Rock"; 
            newResult.textContent =  "You win!  Paper beats Rock"; 
         resultsContent += "You win!  Paper beats Rock\n"; 
        humanScore++;

    } else if (lHumanChoice === "scissors" && lComputerChoice === "rock") 
    {   
        // resultsContent += "You lose! Rock beats Scissors\n"; 
                    newResult.textContent =  "You lose! Rock beats Scissors";
        computerScore++;
    } else if (lHumanChoice === "scissors" && lComputerChoice === "paper")  
    {
          newResult.textContent =  "You win! Scissors beats Paper\n"; 
        // resultsContent += "You win! Scissors beats Paper\n"; 
        humanScore++;
    }

    resultDiv.appendChild(newResult);
    if(humanScore === 5)
    {
        printScore("Human");
    } else if (  computerScore === 5) {
        printScore("Computer");
    }
   
}

const playBtn = document.querySelector("#play-buttons");

playBtn.addEventListener( "click", playRound);

function printScore(winner) 
{
    const resultDiv = document.querySelector("#results");
    let scoreBoard = document.createElement("p");
    scoreBoard.textContent = `****** Game Over! ${winner} won the game!*********
     **********The scoreboard:******  Your Score: ${humanScore}  ComputerScore: ${computerScore}`;

    resultDiv.appendChild(scoreBoard);

    //clear scoreboard
    humanScore = 0;
    computerScore = 0;

}

// playGame();


