export default function verifyArrayEqual(tripla, boardButtons){
    let isEqual = true;
    for(let i = 0; i< tripla.length-1; i++){
          if(boardButtons[tripla[i]].innerHTML != boardButtons[tripla[i+1]].innerHTML){
             isEqual = false;
         }
     }
    return isEqual
}