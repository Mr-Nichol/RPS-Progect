const array = ["rock" , "paper" , "scissors"];
const btns = document.querySelectorAll('input');
const marks = document.querySelector('.score')
const stats = document.querySelector('.status')

function disableButtons(){
    btns.forEach(function(rbtn){
        rbtn.disabled = true;        
    })
}

function getComputerChoice(arr){
    const randomIndex = Math.floor(Math.random()*arr.length);
    const computersChoice = arr[randomIndex];  
    return computersChoice;  
}

let score = 0;
function playround(playersSelection){
    const computersSelection = getComputerChoice(array);
    if(computersSelection === playersSelection){
        score += 1;
        if (score>=5){
            marks.textContent = "you won";
            disableButtons()
            
        }
        else(score<5);
            stats.textContent = "your score is " + score;
            marks.textContent = "you won next round";
    }
    else {
        marks.textContent = "try agin";
        console.log("try agin");
            }            
    }


    
btns.forEach(btn =>{
    btn.addEventListener('click',function (){
        playround(btn.value);
    });
});   