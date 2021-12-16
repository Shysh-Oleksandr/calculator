class Calculator {
    constructor(previousOperandButtonTextElement, currentOperandButtonTextElement) {
        this.previousOperandButtonTextElement = previousOperandButtonTextElement;
        this.currentOperandButtonTextElement = currentOperandButtonTextElement;
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {

    }

    appendNumber(number) {
        this.currentOperand = number;
        console.log(this.currentOperand);
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.currentOperandButtonTextElement.innerText = this.currentOperand;
        console.log(this.currentOperandButtonTextElement.innerText);
    }
}



const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelectorAll('[data-equals]');
const deleteButton = document.querySelectorAll('[data-delete]');
const allClearButton = document.querySelectorAll('[data-all-clear]');
const previousOperandButtonTextElement = document.querySelectorAll('[data-previous-operand]');
const currentOperandButtonTextElement = document.querySelectorAll('[data-current-operand]');

const calculator = new Calculator(previousOperandButtonTextElement, currentOperandButtonTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log("fkwejoi");
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});