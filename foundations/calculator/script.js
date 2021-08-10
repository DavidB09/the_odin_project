
const equationElem = document.querySelector('.main-equation'); 
const valueElem = document.querySelector('.main-value'); 

const operatorElems = document.querySelectorAll('.operator'); 
const numberElems = document.querySelectorAll('.number'); 

const undoBtn = document.querySelector('.undo'); 
const clearBtn = document.querySelector('.clear');

let currEquation = ''; 
let currValue = ''; 
let isNew = false; 


const updateCalculator = () => {
    equationElem.textContent = currEquation; 
    valueElem.textContent = currValue; 
}; 

const clearCalculator = () => {
    currEquation = ''; 
    currValue = '0'; 
    updateCalculator(); 
}; 

const undoCalculator = () => {
    currValue = currValue.slice(0, currValue.length - 1); 
    updateCalculator(); 
}; 

const updateNewCalculation = () => {
    if (isNew) {
        currEquation = `${currValue}`; 
        isNew = false; 
    }
}; 

const runCalculation = () => {
    let [num1, op, num2] = currEquation.split(' '); 
    let total = 0; 

    if (!num1 || !op || !num2) return 'NOT ALLOWED'; 

    switch(op) {
        case '*': 
            total = Number(num1) * Number(num2); 
            break; 
        case '/':
            total = Number(num1) / Number(num2); 
            break;
        case '+':
            total = Number(num1) + Number(num2); 
            break;
        case '-':
            total = Number(num1) - Number(num2);
            break;  
    }

    return total; 
}

const handleOperator = (operator) => {
    if (isNew) updateNewCalculation(); 

    let currTotal = runCalculation(); 

    if (currTotal === 'NOT ALLOWED' && operator === '=') return; 

    if (currTotal !== 'NOT ALLOWED') {
        if (operator === '=') {
            currEquation += ` ${operator} ${currTotal}`; 
        } else {
            currEquation = currTotal; 
        }
        currValue = currTotal; 
        updateCalculator(); 
        isNew = true; 
        return; 
    }

    if (/[*/+-] $/.test(currEquation)) {
        currEquation = currEquation.slice(0, -2); 
    }

    currEquation += ` ${operator} `; 
    updateCalculator(); 
}; 

operatorElems.forEach(operator => {
    operator.addEventListener('click', () => handleOperator(operator.value)); 
})

const handleNumber = (number) => {
    if (isNew) updateNewCalculation(); 

    if (/[*/+-] $/.test(currEquation)) currValue = ''; 

    if (currValue === '0') {
        currValue = (number === '.' ? currValue : ''); 
        currEquation = currEquation.slice(0, (number === '.' ? currEquation.length : -1)); 
    }

    if (number === '.') {
        if (/[.]/g.test(currValue)) return; 
        if (!currValue) {
            currValue = '0'; 
            currEquation += '0'; 
        }
    }

    currValue += number; 
    currEquation += number; 
    updateCalculator(); 
}; 


numberElems.forEach(number => {
    number.addEventListener('click', () => handleNumber(number.value)); 
}); 


clearBtn.addEventListener('click', clearCalculator);
undoBtn.addEventListener('click', undoCalculator); 