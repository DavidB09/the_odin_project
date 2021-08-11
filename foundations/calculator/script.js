const equationElem = document.querySelector('.main-equation'); 
const valueElem = document.querySelector('.main-value');

const buttons = document.querySelectorAll('button'); 

let operand1 = ''; 
let operand2 = '';
let operator = ''; 
let currInput = ''; 

const updateCalculator = () => {
    equationElem.textContent = `${operand1} ${operator} ${operand2}`.trim(); 
    valueElem.textContent = currInput; 
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

    operand1 = `${Math.round(total * 10000000) / 10000000}`; 
    operand2 = ''; 
    operator = ''; 
    currInput = operand1; 
}; 

const handleOperand = () => {
    if (!operator) operand1 = currInput; 
    else operand2 = currInput; 
}; 

const handleNumber = (value) => {
    if (operand1 && operator && !operand2) currInput = ''; 
    if (currInput === '0') currInput =  ''; 

    if (!isFinite(Number(currInput)) || isNaN(Number(currInput))) return;

    currInput += value; 
    handleOperand(); 
    updateCalculator(); 
}; 

const handleOperator = (value) => {
    if (operand1 && operand2) runCalculation(); 
    operator = value; 
    updateCalculator(); 
}; 

const handleEqual = () => {
    if (!operand2 || !operand1) return; 
    if (operand1 && operand2) runCalculation(); 
    equationElem.textContent = `${equationElem.textContent} = ${currInput}`; 
    valueElem.textContent = currInput; 
}; 

const handleDecimal = () => {
    if (operand1 && operator && !operand2) currInput = ''; 
    if (/[.]/g.test(currInput)) return; 

    if (!currInput) currInput = '0.'; 
    else currInput += '.'; 
    handleOperand();
    updateCalculator(); 
}; 

const undoCalculator = () => {
    if (operand2) {
        operand2 = operand2.slice(0, operand2.length - 1);
        currInput = operand2; 
    } else if (operator) {
        operator = ''; 
        currInput = operand1; 
    } else if (operand1) {
        operand1 = operand1.slice(0, operand1.length - 1) || '0';
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
        if (button.value === e.key.toLowerCase()) button.focus(); 
    }); 
}); 

clearCalculator(); 