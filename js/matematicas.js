let addNum1 = document.getElementById("addButtonNum1");
let addNum2 = document.getElementById("addButtonNum2");
let addNum3 = document.getElementById("addButtonNum3");
let subNum1 = document.getElementById("subButtonNum1");
let subNum2 = document.getElementById("subButtonNum2");
let subNum3 = document.getElementById("subButtonNum3");
let mulNum1 = document.getElementById("mulButtonNum1");
let mulNum2 = document.getElementById("mulButtonNum2");
let mulNum3 = document.getElementById("mulButtonNum3");
let divNum1 = document.getElementById("divButtonNum1");
let divNum2 = document.getElementById("divButtonNum2");
let divNum3 = document.getElementById("divButtonNum3");
let newGameButton = document.getElementById("newGameButton");
let verifyButton = document.getElementById("buttonVerificar");
newGameButton.addEventListener("click",fill);
verifyButton.addEventListener("click",verifyOperations);
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let op1pos = getRandomArbitrary(1,4)
let op1num1 = getRandomArbitrary(0,100)
let op1num2 = getRandomArbitrary(0,100)
let op2pos = getRandomArbitrary(1,4)
let op2num1 = getRandomArbitrary(0,100)
let op2num2 = getRandomArbitrary(0,100)
let op3pos = getRandomArbitrary(1,4)
let op3num1 = getRandomArbitrary(0,100)
let op3num2 = getRandomArbitrary(0,100)
let op4pos = getRandomArbitrary(1,4)
let op4num1 = getRandomArbitrary(0,100)
let op4num2 = getRandomArbitrary(0,100)
function fill(){
    clean();
    fillOp1();
    fillOp2();
    fillOp3();
    fillOp4();
}
function fillOp1(){
    op1pos = getRandomArbitrary(1,4)
    op1num1 = getRandomArbitrary(0,100)
    op1num2 = getRandomArbitrary(0,100)
   switch (op1pos){
       case 1:
        addNum2.value = op1num2;
        addNum3.value = op1num1+op1num2;
        break;
        case 2:
            addNum1.value = op1num1;
            addNum3.value = op1num1+op1num2;
        break;
        case 3:
            addNum1.value = op1num1;
            addNum2.value = op1num2;
        break;        
   }
} 
function fillOp2(){
    op2pos = getRandomArbitrary(1,4)
    op2num1 = getRandomArbitrary(0,100)
    op2num2 = getRandomArbitrary(0,100)
    let numMay = op2num1;
    let numMen = op2num2;
    if(op2num1<op2num2){
        numMay = op2num2;
        numMen = op2num1;
    }
   switch (op2pos){
       case 1:
        subNum2.value = numMen;
        subNum3.value = numMay-numMen;
        break;
        case 2:
            subNum1.value = numMay;
            subNum3.value = numMay-numMen;
            break;
        case 3:
            subNum1.value = numMay;
            subNum2.value = numMen;
            break;        
   }
} 
function fillOp3(){
    op3pos = getRandomArbitrary(1,4)
    op3num1 = getRandomArbitrary(0,20)
    op3num2 = getRandomArbitrary(0,20)
   switch (op3pos){
       case 1:
        mulNum2.value = op3num2;
        mulNum3.value = op3num1*op3num2;
        break;
        case 2:
            mulNum1.value = op3num1;
            mulNum3.value = op3num1*op3num2;
        break;
        case 3:
            mulNum1.value = op3num1;
            mulNum2.value = op3num2;
        break;        
   }
} 
function fillOp4(){
    op4pos = getRandomArbitrary(1,4)
    op4num1 = getRandomArbitrary(1,20)
    op4num2 = getRandomArbitrary(1,20)
   switch (op4pos){
       case 1:
        divNum2.value = op4num2;
        divNum3.value = op4num1;
        break;
        case 2:
            divNum1.value = op4num1*op4num2;
            divNum3.value = op4num1;
        break;
        case 3:
            divNum1.value = op4num1*op4num2;
            divNum2.value = op4num2;
        break;        
   }
} 
function clean(){
    addNum1.value = "";
    addNum2.value = "";
    addNum3.value = "";
    subNum1.value = "";
    subNum2.value = "";
    subNum3.value = "";
    mulNum1.value = "";
    mulNum2.value = "";
    mulNum3.value = "";
    divNum1.value = "";
    divNum2.value = "";
    divNum3.value = "";
    addNum1.style.backgroundColor = 'transparent';
    addNum2.style.backgroundColor = 'transparent';
    addNum3.style.backgroundColor = 'transparent';
    subNum1.style.backgroundColor = 'transparent';
    subNum2.style.backgroundColor = 'transparent';
    subNum3.style.backgroundColor = 'transparent';    
    mulNum1.style.backgroundColor = 'transparent';
    mulNum2.style.backgroundColor = 'transparent';
    mulNum3.style.backgroundColor = 'transparent';
    divNum1.style.backgroundColor = 'transparent';
    divNum2.style.backgroundColor = 'transparent';
    divNum3.style.backgroundColor = 'transparent'; 
} 
function pintOpGreen(op){
    switch (op){
        case 1:
        addNum1.style.backgroundColor = 'green';
        addNum2.style.backgroundColor = 'green';
        addNum3.style.backgroundColor = 'green';
            break;
        case 2:
            subNum1.style.backgroundColor = 'green';
            subNum2.style.backgroundColor = 'green';
            subNum3.style.backgroundColor = 'green';    
            break;
        case 3:
            mulNum1.style.backgroundColor = 'green';
            mulNum2.style.backgroundColor = 'green';
            mulNum3.style.backgroundColor = 'green';
            break;
        case 4:
            divNum1.style.backgroundColor = 'green';
            divNum2.style.backgroundColor = 'green';
            divNum3.style.backgroundColor = 'green';
            break;                      
    }
}
function pintOpRed(){
        addNum1.style.backgroundColor = 'red';
        addNum2.style.backgroundColor = 'red';
        addNum3.style.backgroundColor = 'red';
        subNum1.style.backgroundColor = 'red';
        subNum2.style.backgroundColor = 'red';
        subNum3.style.backgroundColor = 'red';    
        mulNum1.style.backgroundColor = 'red';
        mulNum2.style.backgroundColor = 'red';
        mulNum3.style.backgroundColor = 'red';
        divNum1.style.backgroundColor = 'red';
        divNum2.style.backgroundColor = 'red';
        divNum3.style.backgroundColor = 'red';                     
}
function verifyOperations(){
    pintOpRed();
    let numanswers = 0;
    if(addNum1.value=="" || addNum2.value=="" || addNum3.value =="" || subNum1.value=="" || subNum2.value=="" || subNum3.value ==""
    || mulNum1.value=="" || mulNum2.value=="" || mulNum3.value =="" || divNum1.value=="" || divNum2.value=="" || divNum3.value =="") {
       alert("debe completar todas las operaciones")   
    } else{
     if(Number(addNum3.value) == Number(addNum1.value)+Number(addNum2.value)){
        numanswers++;
        pintOpGreen(1)
    }
    if(Number(subNum3.value) == Number(subNum1.value)-Number(subNum2.value)){
        numanswers++;
        pintOpGreen(2)
    }
    if(Number(mulNum3.value) == Number(mulNum1.value)*Number(mulNum2.value)){
        numanswers++;
        pintOpGreen(3)
    }
    if(Number(divNum3.value) == Number(divNum1.value)/Number(divNum2.value)){
        numanswers++;
        pintOpGreen(4)
    }
    alert("operaciones correctas "+numanswers)
}
}