//ROCK PAPER SCISSOR

const choices=["rock","paper","scissor"];
const playdisplayer=document.getElementById("playerdisplayer");
const computer=document.getElementById("playerdisplayer");
const resultdisplay=document.getElementById("playerdisplayer");
const playerscoredisplay = document.getElementById("playerscoredisplay");
const computerscoredisplay = document.getElementById("playerscoredisplay");
let playerscore =0;
let computerscore =0;


function play (playerchoices){
    const computerchoice = choices[Math.floor(math.random()*3)];
    let result = "";
    if(playerchoices=== computerchoice){
        result="its a tie";

    }
    else{
        switch(playerchoices){
           case"rock":
           result=(computerchoice ==="scissor") ? "you win" : "you lose"
            break;
            case"paper":
            result=(computerchoice ==="rock")? "you win" : "you lose"
            break;
            case"scissor":
            result=(computerchoice==="paper")? "you win": "you lose"
            break;

        }
    }
    playdisplayer.textContent="player: (play choice)";
    playdisplayer.textContent="computer:(computer choice)";
    playdisplayer.textContent="result";
    resultdisplay.classList.remove("greentext", "redtext");
    switch(result){
        case "you win":
            resultdisplay.classList.add("greentext");
            playerscore++;
            playerscoredisplay.textContent = playerscore;
            break;
            case"you lose":
            resultdisplay.classList.add("redtext");
            computerscore++;
            computerscoredisplay.textContent =computerscore;
            break;

    }
}