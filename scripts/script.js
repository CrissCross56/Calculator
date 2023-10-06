//make a class for a calculator
class Calculator{
    constructor(previousOp,currentOp){
        this.previousOp = previousOp
        this.currentOp = currentOp
    }

    clear(){
        this.previousOp = ''
        this.currentOp = ''
    }

    appendNumber(){

    }

    //onec quereied for a result call this function


    doMath(){

    }
}


//setup dom elements for JS
let input = document.querySelector("#input")
//setup two different numbers



let first = true;
const allowedKeys = ["1","2","3","4","5","6","7","8","9","0"]
const operators =["+","-","=","*","/","%"]
//when a key is pressed on the keyboard call a function to sort out what was pressed
input.addEventListener('keydown',sort)


//fucnctions go here

function sort(e){

 

    //possibility taht an operator has been pressed before any values for numbers have been chosen
    if(first && e.key){

    }
    //start holding user inout until they press an operator

    //once an operator has been pressed we need to remove it from the firstNum

    //
}

//add
function math(first,second,operation){
    //here we want to acquire one number, the operation to perform and then the second number
    //the math should only execute once we provided a second number
    

}

//subtract
