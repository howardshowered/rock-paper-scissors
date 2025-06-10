
let humanScore = 0;
let computerScore = 0;

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
function playRound(humanChoice, computerChoice) 
{
    const lHumanChoice = humanChoice.toLowerCase();
    const lComputerChoice = computerChoice.toLowerCase();

    if (lHumanChoice === lComputerChoice){
        console.log("It's a tie!" )
    } else if (lHumanChoice === "rock" && lComputerChoice === "paper")
    {
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }  else if (lHumanChoice === "rock" && lComputerChoice === "scissors")
    {
        console.log("You win! Rock beats Scissors");
        humanScore++;

    } else if (lHumanChoice === "paper" && lComputerChoice === "scissors")
    {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    } else if (lHumanChoice === "paper" && lComputerChoice === "rock")
    {
        console.log("You win!  Paper beats Rock");
        humanScore++;

    } else if (lHumanChoice === "scissors" && lComputerChoice === "rock") 
    {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    } else if (lHumanChoice === "scissors" && lComputerChoice === "paper")  
    {
        console.log("You win! Scissors beats Paper");
        humanScore++;
    }

}



// playRound(humanSelection, computerSelection);

function playGame() 
{

    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`******The scoreboard:******\nYour Score: ${humanScore}\nComputerScore: ${computerScore}`);

}

playGame();


