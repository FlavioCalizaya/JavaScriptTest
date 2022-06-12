//import verifyArrayEqual from './verifyMethods.js';
let turn = 0;
let turnP =0;
let posMoveIa=[];
let points = [0,0];
let piece = ["O", "X"];
let playerPiece = "O";
let countFill = 0;
let endGame = false;
let chainTripla = [];
let chainNTupla = [];
getChainNTupla(3);
let winTripla = [];
let countNumLimitGames = 0;
let countNumGame = 1;
let boardSize = 3;
let cleanButton = document.getElementById("cleanButton");
let newGameButton = document.getElementById("newGameButton");
cleanButton.addEventListener("click",cleanBoard);
newGameButton.addEventListener("click",newGame);
let numLimitGames = document.getElementById("numLimitGame");
let numActualGame = document.getElementById("numActualGame");
let pointPlayer1 = document.getElementById("pointPlayer1");
let pointPlayer2 = document.getElementById("pointPlayer2");
let boardButtons = document.getElementsByClassName("boardButton");
let boardContainer = document.getElementById("boardContainer");
let iaButton = document.getElementById("iaButton");
iaButton.addEventListener("click",markIa);
let ia = false;
Array.from(boardButtons).forEach(x=> x.addEventListener("click",mark));
function mark(event){
    console.log(ia)
    if(ia){
        let fixedButton = event.target;
        if(!endGame && fixedButton.innerHTML =="" ){
           fixedButton.innerHTML = piece[turn];
           changeTurn();
           countFill +=1;
           if(countFill>8){
              endGame = true;
              if(!verifiyPieces()){
                  alert("no hay ganador");
                  countNumGame += 1;
              }
           }
           if(verifiyPieces()){
             endGame = true;
             points[turn] += 1;
             paintWinLine();
           }
       }
       
       moveIa();
       countFill +=1;
           if(countFill>8){
              endGame = true;
              if(!verifiyPieces()){
                  alert("no hay ganador");
                  countNumGame += 1;
              }
           }
           if(verifiyPieces()){
             endGame = true;
             points[turn] += 1;
             paintWinLine();
      }
       changeTurn()
    }
    else{
        let fixedButton = event.target;
        if(!endGame && fixedButton.innerHTML =="" ){
           fixedButton.innerHTML = piece[turn];
           countFill +=1;
           if(countFill>8){
              endGame = true;
              if(!verifiyPieces()){
                  alert("no hay ganador");
                  countNumGame += 1;
              }
           }
           if(verifiyPieces()){
             endGame = true;
             points[turn] += 1;
             paintWinLine();
           }
           changeTurn();
       }
    }
}
function markIa(event){
  ia =true;
}
function moveIa(){
    let count;
    let maxCount = 0;
    let maxCountAi = 0
    let countAi = 0;
    chainNTupla.forEach(tripla=> {
        count = countEquals(tripla);
        countAi = countEqualsAi(tripla);
        if(count>maxCount){
            posMoveIa = tripla;
            maxCount=count;
        }
        if(countAi>maxCountAi){
            maxCountAi =countAi;
            posMoveIa = tripla;
        }
       }    
     )
     if(maxCountAi==2){
         moveIaToWin();
     } 
     else{
        if(maxCount>=boardSize-1){
            moveIaNoWin();
        }
         else{   
            if(boardButtons[4].innerHTML == ""){
                boardButtons[4].innerHTML = piece[turn];
            }
            else{
                if(maxCountAi==0){
                   moveIaToFree();    
                }else{
                    moveIaToSecond();
                }
            }
         }
             
     }      
}
function moveIaToWin(){
    chainNTupla.forEach(tripla=> {
        let countAi = countEqualsAi(tripla);
        if(countAi==2){
            posMoveIa = tripla;
        }
       }    
     )
   moveIaNoWin();  
}
function moveIaNoWin(){
    console.log(posMoveIa)
    for(let i = 0; i< 3; i++){
        if(boardButtons[posMoveIa[i]].innerHTML == ""){
            boardButtons[posMoveIa[i]].innerHTML = piece[turn];
       }
   }
}
function moveIaToSecond(){
    let countplay = 0;
    for(let i = 0; i< 3; i++){
       if(countplay==0){ if(boardButtons[posMoveIa[i]].innerHTML == ""){
            boardButtons[posMoveIa[i]].innerHTML = piece[turn];
            countplay++ 
            break;
       }
      }
   }
}
function moveIaToFree(){
        if(boardButtons[0].innerHTML == ""){
            boardButtons[0].innerHTML = piece[turn];
       }else{
           if(boardButtons[2].innerHTML == ""){
            boardButtons[2].innerHTML = piece[turn];
           }
           else{
            if(boardButtons[6].innerHTML == ""){
                boardButtons[6].innerHTML = piece[turn];
               }
               else{
                if(boardButtons[8].innerHTML == ""){
                    boardButtons[8].innerHTML = piece[turn];
                   }
                   else{
                    for(let i = 0; i< tripla.length; i++){
                        if(boardButtons[i].innerHTML == ""){
                            boardButtons[i].innerHTML = piece[turn]
                            break;
                        }
                    }
                   }
               }   
        }
    }
}
function countEquals(tripla){
    let count = 0;
    let countAI = 0;
    for(let i = 0; i< tripla.length; i++){
        if(boardButtons[tripla[i]].innerHTML == piece[turnP]){
           count++;
       }
       if(boardButtons[tripla[i]].innerHTML == piece[1]){
        countAI++;
      }
   }
   if((count+countAI)==3){
       return 0;
   }
    return count;
}
function countEqualsAi(tripla){
    let count = 0;
    let countAI = 0;
    for(let i = 0; i< tripla.length; i++){
        if(boardButtons[tripla[i]].innerHTML == piece[0]){
           count++;
       }
       if(boardButtons[tripla[i]].innerHTML == piece[1]){
        countAI++;
      }
   }
   if((count+countAI)==3){
       return 0;
   }
    return countAI;
}
function changeTurn(){
    turn +=1;
    turn %=2;
}
function verifiyPieces(){
    let state = false;
    chainNTupla.forEach(tripla=> {
       if(boardButtons[tripla[0]].innerHTML != ""){

        if(verifyArrayEqual(tripla)){
            state = true;
            winTripla = tripla;
        }
       } 
      }    
    )       
    return state;
}
function verifyArrayEqual(tripla){
    let isEqual = true;
    for(let i = 0; i< tripla.length-1; i++){
          if(boardButtons[tripla[i]].innerHTML != boardButtons[tripla[i+1]].innerHTML){
             isEqual = false;
         }
     }
    return isEqual
}
function paintWinLine(){
    winTripla.forEach(index =>{
        boardButtons[index].style.backgroundColor = 'green';
    })
    setPoints();
    alert("jugador "+ (turn+1) +" gano");
    countNumGame += 1;
    if(countNumLimitGames > 1){
        if(countNumGame>countNumLimitGames){
            if(points[0]>points[1]){
                alert("el jugador 1 gano el juego");
            }
            else{
                if(points[0] < points[1]){
                    alert("el jugador 2 gano el juego");
                }
                else{
                    alert("los dos jugadores tienen el mismo punto");
                }
            }
            points=[0,0];
            setPoints();
            numLimitGames.innerHTML = "undefine";
            countNumGame = 1;
            numActualGame.innerHTML = 1;
            cleanBoard();

        }
    }
}
function cleanBoard(){
    Array.from(boardButtons).forEach(x => x.innerHTML = "");
 countFill = 0;
 numActualGame.innerHTML = countNumGame;
 endGame = false;
 turn = 0;
 winTripla.forEach(index =>{
    boardButtons[index].style.backgroundColor = 'white';
})
}
function setPoints(){
    pointPlayer1.innerHTML= points[0];
    pointPlayer2.innerHTML = points[1];
}
function newGame(){
   countNumLimitGames = prompt("ingrese el limite de rondas");
   numLimitGames.innerHTML = countNumLimitGames; 
   countNumGame=1 
   numActualGame.innerHTML =1;
   points=[0,0];
   setPoints();
   cleanBoard();
   getChainNTupla(3);
   boardButtons = document.getElementsByClassName("boardButton");
   Array.from(boardButtons).forEach(x=> x.addEventListener("click",mark));
}
function getBoard(boardSize){
    let i = 0;
    boardContainer.innerHTML = "";
    for(i=0; i< boardSize*boardSize; i++){
        let buttonBoard = document.createElement("button");
        buttonBoard.className="boardButton";
        buttonBoard.style.width = 450/boardSize+'px';
        buttonBoard.style.height = 450/boardSize+'px';
        buttonBoard.style.fontSize = 3*6/boardSize +'em';
        boardContainer.appendChild(buttonBoard);
    }
 }
function getChainNTupla(boardSize){
    chainNTupla = [];
    let row = [];
    let column = [];
    let diagonal1 = [];
    let diagonal2 = [];
    let i = 0;
    let j=0;
    for(i=0 ; i<boardSize; i++){
        diagonal1[i] = i+(boardSize)*i;
        diagonal2[i] = (boardSize-1)+(boardSize-1)*i;
    }
    chainNTupla.push(diagonal1);
    chainNTupla.push(diagonal2);
    for(i=0;i<boardSize;i++){
        row = [];
        column =[];
       for(j=0;j<boardSize;j++){
          row[j] = i*boardSize+j;
          column[j] = i+j*boardSize; 
       }
       chainNTupla.push(row);
       chainNTupla.push(column);
    }
}