/*
The main class in this script is the Calculator, which handles all the functionality
of the calculator (obviously). 
*/

class Calculator {
    constructor(prev_text_elem, curr_text_elem) {
        this.prev_text_elem = prev_text_elem;
        this.curr_text_elem = curr_text_elem;
        this.clear();
    }

    // clear the current text
    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    // delete a single number from current text
    delete() {
        this.curr_text_elem;
    }

    // add a number to the beginning of the curr_text_elem string
    appendNumber(number) {
        this.currentOperand = number;
    }

    // Set the operation for the calculation
    chooseOperation(operation) {

    }

    // compute the result of prev_text_elem operation curr_text_elem
    compute() {

    }

    updateDisplay() {
        this.curr_text_elem.innerText = this.currentOperand
    }

}

const number_buttons = document.querySelectorAll('[data-number]');
const operation_buttons = document.querySelectorAll('[data-operation]');
const equals_button = document.querySelector('[data-equals]');
const delete_button = document.querySelector('[data-delete]');
const clear_button = document.querySelector('[data-clear]');
const prev_text_elem = document.querySelector('[data-prev]');
const curr_text_elem = document.querySelector('[data-curr]');

const calculator = new Calculator(prev_text_elem, curr_text_elem);

number_buttons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})