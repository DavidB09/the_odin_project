const equationElem = document.querySelector('.main-equation'); 
const valueElem = document.querySelector('.main-value');

const buttons = document.querySelectorAll('button'); 

let operand1 = ''; 
let operand2 = '';
let operator = ''; 
let currInput = ''; 

const updateCalculator = () => {
    equationElem.textContent = `${operand1} ${operator} ${operand2}`.trim(); //Displays the current equation
    valueElem.textContent = currInput; //Displays the current input
}; 

const runCalculation = () => {
    let total = 0; 

    switch(operator) {
        case '*': 
            total = Number(operand1) * Number(operand2); 
            break; 
        case '/':
            total = Number(operand1) / Number(operand2); 
            break;
        case '+':
            total = Number(operand1) + Number(operand2); 
            break;
        case '-':
            total = Number(operand1) - Number(operand2);
            break;  
        case '%':
            total = Number(operand1) % Number(operand2); 
            break; 
    }; 

    operand1 = `${Math.round((total + Number.EPSILON) * 10000000) / 10000000}`; //Rounds the total of the calculation to seven possible decimal places
    operand2 = ''; 
    operator = ''; 
    currInput = operand1;
}; 

const handleOperand = () => {
    if (!operator) operand1 = currInput; //Sets current input to the first operand if no operator exists
    else operand2 = currInput; 
}; 

const handleNumber = (value) => {
    if (operand1 && operator && !operand2) currInput = ''; //Resets current input to hide the operator
    if (currInput === '0') currInput =  ''; //Resets current input to hide the zero

    if (!isFinite(Number(currInput)) || isNaN(Number(currInput))) return; //Checks whether the current input is a valid number

    currInput += value; //Displays the current number input
    handleOperand(); 
    updateCalculator(); 
}; 

const handleOperator = (value) => {
    if (operand1 && operand2) runCalculation(); //Runs calculator to find the result of the previous equation
    operator = value; 
    updateCalculator(); 
}; 

const handleEqual = () => {
    if (!operand2 || !operand1) return; //Returns if equation isn't valid
    if (operand1 && operand2) runCalculation(); 
    equationElem.textContent = `${equationElem.textContent} = ${currInput}`; //Updates display to show the result
    valueElem.textContent = currInput;
}; 

const handleDecimal = () => {
    if (operand1 && operator && !operand2) currInput = ''; //Resets the current input to hide the operator
    if (/[.]/g.test(currInput)) return; //Returns if a decimal already exists in the current operand

    if (!currInput) currInput = '0.'; //Adds a zero infront of the decimal
    else currInput += '.'; 
    handleOperand();
    updateCalculator(); 
}; 

const undoCalculator = () => {
    if (operand2) {
        operand2 = operand2.slice(0, operand2.length - 1); //Removes the last part of the second operand
        currInput = operand2 || operand1;
    } else if (operator) {
        operator = '';  //Removes the operator
        currInput = operand1;
    } else if (operand1) {
        operand1 = operand1.slice(0, operand1.length - 1) || '0'; //Removes the last part of the first operand or zero if no number exists
        currInput = operand1;
    }
    updateCalculator(); 
}; 

const clearCalculator = () => {
    operand1 = '0'; 
    operand2 = '';
    operator = ''; 
    currInput = '0'; 
    updateCalculator(); 
}; 

const handleInput = (value) => {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']; 
    const operators = ['*', '/', '+', '-', '%']; 

    if (numbers.includes(value)) {
        handleNumber(value); 
    } else if (operators.includes(value)) {
        handleOperator(value); 
    } else if (value === '=') {
        handleEqual(); 
    } else if (value === '.') {
        handleDecimal(); 
    } else if (value === 'backspace') {
        undoCalculator(); 
    } else if (value === 'c') {
        clearCalculator(); 
    }
}

buttons.forEach(button => button.addEventListener('click', () => handleInput(button.value))); 
window.addEventListener('keydown', (e) => {
    handleInput(e.key.toLowerCase()); 
    buttons.forEach((button) => {
        if (button.value === e.key.toLowerCase()) button.focus(); //Focuses the button that corresponds to the current keyboard number input
    }); 
}); 

clearCalculator(); 