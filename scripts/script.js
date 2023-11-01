//make a class for a calculator
class Calculator{
    constructor(prevTextElement,currentTextElement){
        this.prevTextElement = prevTextElement
        this.currentTextElement = currentTextElement
        this.clear()
    }

    clear(){
        this.previousOp = ''
        this.currentOp = ''
        this.operation = undefined
        this.updateDisplay()
    }

    appendNumber(number){
     
            if(number === '.' && this.currentOp.includes('.')){
                return
            }
            this.currentOp = this.currentOp.toString() + number.toString()
        
       
    }

    chooseOperation(operation){
        if(this.currentOp === ''){
            return
        }
        if(this.previousOp !== ""){
            this.compute()
        }
        this.operation = operation
        this.previousOp = this.currentOp
        this.currentOp = ''
    }

    //make a delete function later, will need a div for the delete button

     
    compute(){
        let computation
        const prev = parseFloat(this.previousOp)
        const curr = parseFloat(this.currentOp)
        if(isNaN(prev) || isNaN(curr)){
            return
        }
        switch(this.operation){
            case '+':
                computation = prev + curr
                break
             case '-':
                computation = prev - curr
                break
            case '*':
                computation = prev * curr
                break
            case '/':
                computation = prev / curr
                break
            case '%':
                computation = prev % curr
                break
            default:
                return
        }
        this.currentOp = computation
        this.operation = undefined
        this.previousOp = ''
    }

    updateDisplay(){
        this.currentTextElement.innerText = this.currentOp
        this.prevTextElement.innerText = this.previousOp
    }
}


//setup dom elements for JS
const numberBtns = document.querySelectorAll('[data-number]')
const opBtns = document.querySelectorAll('[data-operation]')
const equalsBtn = document.querySelector('[data-equals]')
const currentTextElement = document.querySelector('[data-current-operand]')
const prevTextElement = document.querySelector('[data-previous-operand]')
const dataClear = document.querySelector('[data-clear]')
const dataEquals = document.querySelector('[data-equals]')
const calculator = new Calculator(prevTextElement,currentTextElement)

//add btns for the numbers
numberBtns.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        calculator.appendNumber(btn.id);
        //test to make sure clicking works
        console.log("you are clicking " +btn.id)
        calculator.updateDisplay()
    })
})

//add btns for the operators

opBtns.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        calculator.chooseOperation(btn.id)
        calculator.updateDisplay();
    })
})

//make equals work
equalsBtn.addEventListener('click',()=>{
    calculator.compute()
    calculator.updateDisplay()
})

dataClear.addEventListener('click', ()=>{
    calculator.clear()
    calculator.updateDisplay()
})
const allowedKeys = ["1","2","3","4","5","6","7","8","9","0"]
const operators =["+","-","=","*","/","%"]

console.log(calculator.currentOp);
