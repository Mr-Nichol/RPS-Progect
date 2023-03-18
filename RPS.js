const array = ["rock" , "paper" , "scissors"];
function getComputerChoice(arr){
    const randomIndex = Math.floor(Math.random()*arr.length);
    const computersChoice = arr[randomIndex];  
    return computersChoice;  
}

function getPlayersChoice(){
    const playersChoice = prompt("Rock,Paper or scissors?").toLowerCase();
    return playersChoice;

}


let score = 0;
function playround(){
    const computersSelection = getComputerChoice(array);
    const playersSelection = getPlayersChoice();
    // console.log(computersSelection);
    // console.log(playersSelection);
    if(computersSelection === playersSelection){
        score = ++score;
        console.log("you won next round");

    }
    else {
            console.log(" try agin");
            }       
    }

function game(){
    // console.log(playround()=== false);
    for(i=0;i<5;i++){
            playround();
        }
    console.log("your score is " + score);

    }

game();