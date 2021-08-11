
const equationElem = document.querySelector('.main-equation'); 
const valueElem = document.querySelector('.main-value'); 

const operatorElems = document.querySelectorAll('.operator'); 
const numberElems = document.querySelectorAll('.number'); 

const decimalBtn = document.querySelector('.decimal'); 
const equalBtn = document.querySelector('.equal'); 

const undoBtn = document.querySelector('.undo'); 
const clearBtn = document.querySelector('.clear');

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
    }; 

    operand1 = `${total}`; 
    operand2 = ''; 
    operator = ''; 
    currInput = operand1; 
}; 

const handleOperator = (value) => {
    if (operand1 && operand2) runCalculation(); 

    operator = value; 
    updateCalculator(); 
}; 

const handleEqual = () => {
    if (operand1 && operand2) runCalculation(); 
    if (!/[=]/g.test(equationElem.textContent)) equationElem.textContent += ` = ${currInput}`; 
    valueElem.textContent = currInput; 
}; 

operatorElems.forEach(operator => operator.addEventListener('click', () => handleOperator(operator.value))); 
equalBtn.addEventListener('click', handleEqual); 

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

const handleDecimal = () => {
    if (operand1 && operator && !operand2) currInput = ''; 
    if (/[.]/g.test(currInput)) return; 

    if (!currInput) currInput = '0.'; 
    else currInput += '.'; 
    handleOperand();
    updateCalculator(); 
}; 

numberElems.forEach(number => number.addEventListener('click', () => handleNumber(number.value))); 
decimalBtn.addEventListener('click', handleDecimal); 

const clearCalculator = () => {
    operand1 = '0'; 
    operand2 = '';
    operator = ''; 
    currInput = '0'; 
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
        operand1 = operand1.slice(0, operand1.length - 1);
        currInput = operand1; 
    }
    updateCalculator(); 
}; 

clearBtn.addEventListener('click', clearCalculator);
undoBtn.addEventListener('click', undoCalculator); 