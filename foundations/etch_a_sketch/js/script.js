import { createGridPoint, createGridRow, testValue } from "./helper.js";
import { getCoords, getPoint, getColor, findLine, rgbToHex, generateRandomColor, adjustBrightness } from "./helper.js";

const gridContainer = document.querySelector('.grid-container');
let gridHeight = 0; 
let gridWidth = 0; 

/**** GRID ****/

const gridHeightInput = document.querySelector('.input-grid-height'); 
const gridWidthInput = document.querySelector('.input-grid-width'); 
const gridSizeInput = document.querySelector('.input-grid-size'); 
const gridBackgroundColorInput = document.querySelector('.input-grid-background-color'); 
const gridColorInput = document.querySelector('.input-grid-color'); 
const gridBorderInput = document.querySelector('.input-grid-border'); 

const gridUpdate = document.querySelector('.update-grid'); 
const gridSubmit = document.querySelector('.submit-grid'); 

let prevBackgroundColor; 

let heightChange, widthChange; 

const createNewGrid = (isClear) => {
    if ((!heightChange || !widthChange) && !isClear) return;

    gridContainer.innerHTML = ''; 
    updateGridHeight(); 
    updateGridWidth(); 
    updatePointSize(); 
    updateGridBackgroundColor(true); 

    prevBackgroundColor = gridBackgroundColorInput.value; 
}; 

const updateGrid = () => {	
    if (heightChange || widthChange) {
        updateGridHeight(); 
        updateGridWidth(); 
        heightChange = widthChange = false; 

        updatePointSize(); 
    }

    updateGridBackgroundColor(); 
    prevBackgroundColor = gridBackgroundColorInput.value; 
}; 

const updateGridHeight = () => {
    let currHeight = gridContainer.querySelectorAll('.grid-row').length; 

    while (currHeight != gridHeight) {
        if (currHeight < gridHeight) {
            gridContainer.appendChild(createGridRow()); 
            currHeight++; 
        }

        if (currHeight > gridHeight) {
            gridContainer.removeChild(gridContainer.lastChild); 
            currHeight--; 
        }
    }
}; 

const updateGridWidth = () => {
    gridContainer.querySelectorAll('.grid-row').forEach(row => {
        let currWidth = row.querySelectorAll('.grid-point').length; 

        while (currWidth != gridWidth) {
            if (currWidth < gridWidth) {
                row.appendChild(createGridPoint(gridBackgroundColorInput.value)); 
                currWidth++; 
            }

            if (currWidth > gridWidth) {
                row.removeChild(row.lastChild); 
                currWidth--; 
            }
        }
    }); 
}; 

const updatePointSize = () => {
    const containerSize = window.getComputedStyle(document.querySelector('.main-grid')).getPropertyValue('height').replace('px', '');
    const pointSize = (0.9 * +containerSize) / (gridHeight > gridWidth ?  gridHeight : gridWidth);

    document.querySelectorAll('.grid-point').forEach(point => {
        point.style.height = `${pointSize}px`; 
        point.style.width = `${pointSize}px`; 
    }); 
}; 

const updateGridBackgroundColor = (isNew) => {
    document.querySelectorAll('.grid-point').forEach(point => {
        if (isNew || rgbToHex(getColor(point)) == prevBackgroundColor || !prevBackgroundColor)
            point.style.backgroundColor = gridBackgroundColorInput.value; 
    }); 
}; 

const updateGridBorder = () => {
    gridBorderInput.classList.toggle('selected-toggle'); 
    document.querySelector('style').innerHTML = gridBorderInput.classList.contains('selected-toggle') ? '' : '.grid-container, .grid-point {border: none;}'; //Adds or removes border styling
}; 

gridHeightInput.addEventListener('input', () => {
    if (!testValue(gridHeightInput.value, 1, 100)) return;

    heightChange = true; 
    gridHeight = +gridHeightInput.value; 
}); 

gridWidthInput.addEventListener('input', () => {
    if (!testValue(gridWidthInput.value, 1, 100)) return;

    widthChange = true; 
    gridWidth = +gridWidthInput.value; 
}); 

gridSizeInput.addEventListener('input', () => {
    if (!testValue(gridSizeInput.value, 1, 100)) return;

    heightChange = widthChange = true; 
    gridHeight = gridWidth = +gridSizeInput.value; 
    gridHeightInput.value = gridWidthInput.value = ''; 
    gridHeightInput.placeholder = gridWidthInput.placeholder = `${gridSizeInput.value}`; 
}); 

gridUpdate.addEventListener('click', updateGrid); 
gridSubmit.addEventListener('click', createNewGrid); 
gridBorderInput.addEventListener('click', updateGridBorder); 

/**** DRAWING ****/

let isControlDown = false; 

let prevPoint; 
let pointColor; 

const toolContainer = document.querySelector('.drawing-tool-container'); 
let currTool; 

const shapeContainer = document.querySelector('.drawing-shape-container'); 
let currShape; 

const colorContainer = document.querySelector('.drawing-color-container'); 
let currColor; 

const drawBlack = () => {
    pointColor = '#000'; 
}; 

const drawRandom = () => {
    pointColor = rgbToHex(generateRandomColor()); 
}; 

const drawColor = () => {
    pointColor = gridColorInput.value; 
}; 

const drawRainbow = () => {
    const colors = ['#F60000', '#FF8C00', '#FFEE00', '#4DE94C', '#3783FF', '#4815AA']; 

    for (let i = 0; i < colors.length; i++) {
        if (colors[i] === pointColor) {
            pointColor = colors[i + 1]; 
            console.log(pointColor, colors[i], i);
            break; 
        }
    }

    if (!colors.includes(pointColor)) pointColor = colors[0];
}; 

const colorFunctions = {
    'black': drawBlack, 
    'random': drawRandom, 
    'color': drawColor, 
    'rainbow': drawRainbow, 
}; 

colorContainer.addEventListener('click', (e) => {
    const selectedButton = e.target.closest('.drawing-color'); 

    if (!selectedButton) return; 

    currColor = selectedButton.value; 
    colorFunctions[currColor](); 

    document.querySelectorAll('.drawing-color').forEach(button => button.classList.remove('selected-toggle')); 
    selectedButton.classList.add('selected-toggle'); 
}); 

const drawGrid = (e) => {
    colorFunctions[currColor](); 

    if (!prevPoint) {
        e.target.style.backgroundColor = pointColor; 
        return; 
    }; 

    const line = findLine(getCoords(prevPoint, gridContainer), getCoords(e.target, gridContainer), gridContainer); 
    line.forEach(point => point.style.backgroundColor = pointColor); 
}; 

const eraseGrid = (e) => {
    if (!prevPoint) {
        e.target.style.backgroundColor = gridBackgroundColorInput.value; 
        return; 
    }; 

    const line = findLine(getCoords(prevPoint, gridContainer), getCoords(e.target, gridContainer), gridContainer); 
    line.forEach(point => point.style.backgroundColor = gridBackgroundColorInput.value); 
}; 

const lightenGrid = (e) => {
    if (!prevPoint) {
        e.target.style.backgroundColor = adjustBrightness(0.2, getColor(e.target)); 
        return; 
    }; 

    const line = findLine(getCoords(prevPoint, gridContainer), getCoords(e.target, gridContainer), gridContainer);  
    line.forEach(point => point.style.backgroundColor = adjustBrightness(0.2, getColor(point))); 
}; 

const darkenGrid = (e) => {
    if (!prevPoint) {
        e.target.style.backgroundColor = adjustBrightness(-0.2, getColor(e.target)); 
        return; 
    }; 

    const line = findLine(getCoords(prevPoint, gridContainer), getCoords(e.target, gridContainer), gridContainer); 
    line.forEach(point => point.style.backgroundColor = adjustBrightness(-0.2, getColor(point))); 
}; 

const fillGrid = () => {
    let changedPoints = []; 

    function findSibling(point, index, oldColor) {
        const parent = point.parentNode; 
        const currColor = getColor(point); 

        if (changedPoints.some(changedPoint => changedPoint == point)) return; 
        if (oldColor != currColor) return; 

        changedPoints.push(point); 

        if (parent.nextElementSibling) {
            const parentNextSiblingChildren = Array.from(parent.nextElementSibling.children); 
            findSibling(parentNextSiblingChildren[index], index, oldColor); 
        }

        if (parent.previousElementSibling) {
            const parentPrevSiblingChildren = Array.from(parent.previousElementSibling.children); 
            findSibling(parentPrevSiblingChildren[index], index, oldColor); 
        }

        if (point.nextElementSibling) {
            findSibling(point.nextElementSibling, index + 1, oldColor); 
        }

        if (point.previousElementSibling) {
            findSibling(point.previousElementSibling, index - 1, oldColor);
        }
    }

    function handleClick(e) {
        if (e.target.nodeName !== 'SPAN') return;
        gridContainer.onclick = ''; 

        findSibling(e.target, getCoords(e.target, gridContainer).x, getColor(e.target)); 
        colorFunctions[currColor](); 
        changedPoints.forEach(point => point.style.backgroundColor = pointColor); 
    }

    gridContainer.onclick = (e) => handleClick(e); 
}; 

const selectGrid = (e) => {
    gridColorInput.value = rgbToHex(getColor(e.target)) || '#FFFFFF'; 
}; 

const toolFunctions = {
    'draw': drawGrid, 
    'erase': eraseGrid, 
    'lighten': lightenGrid, 
    'darken': darkenGrid, 
    'fill': fillGrid, 
    'select': selectGrid, 
}; 

toolContainer.addEventListener('click', (e) => {
    const selectedButton = e.target.closest('.drawing-tool'); 

    if (!selectedButton) return; 

    currTool = selectedButton.value; 
    currShape = ''; 

    document.querySelectorAll('.selected-button').forEach(button => button.classList.remove('selected-button')); 
    selectedButton.classList.add('selected-button'); 
}); 

let prevDrawnShape = []; 

const reverseDrawnShape = () => {
    prevDrawnShape.forEach(point => {
        const {currPoint, currColor} = point; 
        currPoint.style.backgroundColor = currColor; 
    }); 
    prevDrawnShape = []; 
}; 

const drawRectangle = (e) => {
    if (!prevPoint) {
        prevPoint = e.target; 
        prevDrawnShape = []; 
        return; 
    }

    reverseDrawnShape(); 
    colorFunctions[currColor](); 

    const {x: x1, y: y1} = getCoords(prevPoint, gridContainer); 
    const {x: x2, y: y2} = getCoords(e.target, gridContainer); 

    let rectangle = []; 

    for (let x = (x1 > x2 ? x2 : x1); x <= (x1 >= x2 ? x1 : x2); x++) {
        rectangle.push(...findLine({x, y: y1}, {x, y: y1 + (y2 - y1)}, gridContainer)); 
    }

    rectangle.forEach(point => {
        prevDrawnShape.push({currPoint: point, currColor: getColor(point)}); 
        point.style.backgroundColor = pointColor; 
    }); 
}; 

const drawCircle = (e) => {
    if (!prevPoint) {
        prevPoint = e.target; 
        prevDrawnShape = []; 
        return; 
    }

    reverseDrawnShape(); 
    colorFunctions[currColor](); 

    const {x: x1, y: y1} = getCoords(prevPoint, gridContainer); 
    const {x: x2, y: y2} = getCoords(e.target, gridContainer); 

    let circle = []; 

    const radius = Math.ceil(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
    for (let dy = -radius; dy <= radius; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
            const distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
            if (distance > radius) continue;

            const y = y1 + dy, x = x1 + dx;
            if (y < 0 || y >= gridHeight || x < 0 || x >= gridWidth) continue;
            circle.push(getPoint(x, y, gridContainer));
        }
    }

    circle.forEach(point => {
        prevDrawnShape.push({currPoint: point, currColor: getColor(point)}); 
        point.style.backgroundColor = pointColor; 
    }); 
}; 

const drawLine = (e) => {
    if (!prevPoint) {
        prevPoint = e.target; 
        prevDrawnShape = []; 
        return; 
    }

    reverseDrawnShape(); 
    colorFunctions[currColor](); 

    const {x: x1, y: y1} = getCoords(prevPoint, gridContainer); 
    const {x: x2, y: y2} = getCoords(e.target, gridContainer); 

    findLine({x: x1, y: y1}, {x: x2, y: y2}, gridContainer).forEach(point => {
        prevDrawnShape.push({currPoint: point, currColor: getColor(point)}); 
        point.style.backgroundColor = pointColor; 
    }); 
}; 

const shapeFunctions = {
    'rectangle': drawRectangle, 
    'circle': drawCircle,
    'line': drawLine, 
}; 

shapeContainer.addEventListener('click', (e) => {
    const selectedButton = e.target.closest('.drawing-shape'); 

    if (!selectedButton) return; 

    currShape = selectedButton.value; 
    currTool = ''; 

    document.querySelectorAll('.selected-button').forEach(button => button.classList.remove('selected-button')); 
    selectedButton.classList.add('selected-button'); 
});

gridContainer.addEventListener('mouseover', (e) => {
    e.preventDefault(); 
    if (!isControlDown || e.target.nodeName !== 'SPAN') return; 
    
    if (currTool) {
        toolFunctions[currTool](e);
        prevPoint = e.target; 
    }

    if (currShape) {
        shapeFunctions[currShape](e); 
    }
}); 

document.addEventListener('keydown', (e) => isControlDown = e.ctrlKey || e.metaKey);
document.addEventListener('keyup', (e) => {
    if (!e.ctrlKey || !e.metaKey) {
        isControlDown = false; 
        prevPoint = undefined; 
    }
});

/**** ACTIONS ****/

const saveButton = document.querySelector('.action-save'); 
const clearButton = document.querySelector('.action-clear'); 

saveButton.addEventListener('click', () => {
    const size = 10; 

    const canvas = document.createElement('canvas'); 
    canvas.height = gridHeight * size; 
    canvas.width = gridWidth * size; 
    const context = canvas.getContext('2d'); 

    for (let x = 0; x < gridWidth; x++) {
        for (let y = 0; y < gridHeight; y++) {
            context.fillStyle = getColor(getPoint(x, y, gridContainer)); 
            context.fillRect(size * x, size * y, size, size);
        }
    }

    const link = document.createElement('a'); 
    link.href = canvas.toDataURL(); 
    link.download = 'etchasketch.png'; 

    document.body.appendChild(link);
    link.click();
    link.remove();
}); 

clearButton.addEventListener('click', createNewGrid);

/**** STYLING ****/

document.querySelectorAll('button[type="submit"]').forEach(button => {
    const updateSpanPos = (e) => {
        const currSpan = button.querySelector('span'); 
        const {top, left} = button.getBoundingClientRect(); 
    
        currSpan.style.top = `${e.clientY - top}px`; 
        currSpan.style.left = `${e.clientX - left}px`; 
    }; 

    button.addEventListener('mouseenter', updateSpanPos); 
    button.addEventListener('mouseout', updateSpanPos); 
}); 

document.querySelectorAll('.toggle-svg').forEach(toggle => toggle.addEventListener('click', (e) => {
    const svg = e.target.closest('.toggle-svg'); 
    const toggleDiv = svg.parentNode.querySelector('.toggle-div'); 

    toggleDiv.classList.toggle('hidden-small'); 
    svg.style.transform = `rotate(${toggleDiv.classList.contains('hidden-small') ? '90' : '0'}deg)`; 
})); 

(function init() {
    heightChange = true; 
    gridHeight = 50; 

    widthChange = true; 
    gridWidth = 50; 

    gridHeightInput.value = 50; 
    gridWidthInput.value = 50; 
    gridSizeInput.value = 50; 

    gridBackgroundColorInput.value = '#ffffff'; 
    gridColorInput.value = '#0060df'; 

    createNewGrid(); 
    updateGridBorder(); 

    currColor = 'black'; 
    drawBlack(); 
    document.querySelector('.input-color-black').classList.add('selected-toggle'); 

    window.addEventListener('resize', updatePointSize); 
})(); 
