let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice=() => {
    const options= ["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame= () => {
    msg.innerText="game was draw. play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userscore++;
        userScorepara.innerText=userscore;
        msg.innerText=`you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compScorepara.innerText=compscore;
        msg.innerText=`you lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    //generate computer choice
    const CompChoice = genCompChoice();

    if(userChoice === CompChoice) {
        //draw game
        drawGame();
    }else {
        let userWin = true;
        if(userChoice==="rock"){
            //scissos,paper
            userWin=CompChoice === "paper" ? false : true;
        }else if (userChoice==="paper"){
            //rock,scissors
            userWin=CompChoice==="scissors" ? false:true;
        }else{
            //rock,paper
            userWin=CompChoice==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,CompChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
    
