const player1=document.querySelector("#player1");
const player2=document.querySelector("#player2");
const Restartbtn=document.querySelector(".restartBtn");

let gamecell=document.querySelectorAll(".cell");

let currPlayer='X';
let nextPlayer='O';
let playerTurn=currPlayer;

player1.textContent=`Player 1: ${currPlayer}`;
player2.textContent=`Player 2:${nextPlayer}`;



  
const startGame=()=>{
    gamecell.forEach(cell=>{
        cell.addEventListener('click',containet)
       });
  
}

const containet = (e)=>{
    if(e.target.textContent===''){
        e.target.textContent=playerTurn;
    if(checkWin()){
       console.log(`${playerTurn} is wine the match `);
       block();
    }else if(checkTie()){
        console.log("match is tie");
        block();
    }else{
        changePlayerTurn();
    }
}
}

const changePlayerTurn = ()=>{
    if(playerTurn === currPlayer){
            playerTurn=nextPlayer;
    }else{
        playerTurn=currPlayer;
    }
}

const checkWin = ()=>{
    let wingingCondition=[
        [0,4,8],
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [6,4,2],
    ];

    for(let i=0;i<wingingCondition.length;i++){
        const [pos1,pos2,pos3]=wingingCondition[i];
        if(gamecell[pos1].textContent!=='' && gamecell[pos1].textContent==gamecell[pos2].textContent && gamecell[pos2].textContent==gamecell[pos3].textContent){
            return true;
        }
    }
    return false;
}

const checkTie = () =>{
    let element=0;

    gamecell.forEach(cell=>{
        if(cell.textContent===''){
            element++;
        }
    });
    return element==0 && !checkWin();
    
}

const block = ()=>{
    gamecell.forEach(cell=>{
        cell.classList.add('blockDisplay');
    })
}

const restart =(e)=>{
        gamecell.forEach(cell=>{
                cell.textContent='';
                cell.classList.remove('blockDisplay');
        })
}

Restartbtn.addEventListener('click',restart);

startGame();
