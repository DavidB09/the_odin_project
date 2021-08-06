import { createGridElement, createGridDivider, testValue } from "./js/helper.js";
import { getCoords, getPoint, getColor, findLine, adjustBrightness } from "./js/helper.js";

const gridContainer = document.querySelector('.main-grid');
let gridHeight = 0; 
let gridWidth = 0; 

/********* GRID *********/

const gridHeightInput = document.querySelector('.input-grid-height'); 
const gridWidthInput = document.querySelector('.input-grid-width'); 
const gridSizeInput = document.querySelector('.input-grid-size'); 
const gridBackgroundColorInput = document.querySelector('.input-grid-background-color'); 
const gridBorderInput = document.querySelector('.input-grid-border'); 

const gridUpdate = document.querySelector('.update-grid'); 
const gridSubmit = document.querySelector('.submit-grid'); 

let heightChange, widthChange, backgroundColorChange; 

const createNewGrid = (isClear) => {
	if ((!heightChange || !widthChange) && !isClear) return; 

	gridContainer.innerHTML = ''; 
	updateGridHeight(); 
	updateGridWidth(); 
	updateGridBackgroundColor(); 
	updateGridBorder(); 
}; 

const updateGrid = () => {	
	if (heightChange || widthChange) {
		updateGridHeight(); 
		updateGridWidth(); 
		heightChange = widthChange = false; 
	}

	if (backgroundColorChange) {
		updateGridBackgroundColor(); 
		backgroundColorChange = false; 
	}
}; 

const updateGridHeight = () => {
	let currentHeight = gridContainer.querySelectorAll('.grid-divider').length; 

	while (currentHeight != gridHeight) {
		if (currentHeight < gridHeight) {
			gridContainer.appendChild(createGridDivider()); 
			currentHeight++; 
		}

		if (currentHeight > gridHeight) {
			gridContainer.removeChild(gridContainer.lastChild); 
			currentHeight--; 
		}
	}
}; 

const updateGridWidth = () => {
	gridContainer.querySelectorAll('.grid-divider').forEach(divider => {
		let currentWidth = divider.querySelectorAll('.grid-elem').length; 

		while (currentWidth != gridWidth) {
			if (currentWidth < gridWidth) {
				divider.appendChild(createGridElement()); 
				currentWidth++; 
			}
	
			if (currentWidth > gridWidth) {
				divider.removeChild(divider.lastChild); 
				currentWidth--; 
			}
		}
	}); 
}; 

const updateGridBackgroundColor = () => {
	gridContainer.style.backgroundColor = gridBackgroundColorInput.value; 
}; 

const updateGridBorder = () => {
	document.querySelector('style').innerHTML = gridBorderInput.checked ? '' : '.main-grid, .grid-elem {border: none;}';
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

gridBackgroundColorInput.addEventListener('input', () => {
	backgroundColorChange = true; 
}); 

gridUpdate.addEventListener('click', updateGrid); 
gridSubmit.addEventListener('click', createNewGrid); 
gridBorderInput.addEventListener('click', updateGridBorder); 


/********* Square *********/

let isControlDown = false; 

const toolContainer = document.querySelector('.square-tool-container'); 
let currentTool; 

const shapeContainer = document.querySelector('.square-shape-container'); 
let currentShape; 

let previousSquare; 

const colorContainer = document.querySelector('.square-color-container'); 
const squareColorInput = document.querySelector('.input-square-color'); 

let currentColor = 'black'; 
let squareColor = '#000'; 

const drawBlack = () => {
	squareColor = '#000'; 
}; 

const drawRainbow = () => {
	const colors = ['#F60000', '#FF8C00', '#FFEE00', '#4DE94C', '#3783FF', '#4815AA']; 

	for (let i = 0; i < colors.length; i++) {
		if (colors[i] === squareColor) {
			squareColor = colors[i + 1]; 
			break; 
		}
	}

	if (!colors.includes(squareColor)) squareColor = colors[0]; 
}; 

const drawColor = () => {
	squareColor = squareColorInput.value; 
}; 

const colorFunctions = {
	'black': drawBlack, 
	'rainbow': drawRainbow, 
	'color': drawColor, 
}; 

toolContainer.addEventListener('click', (e) => {
	if (e.target.classList.contains('square-tool')) {
		currentTool = e.target.value; 
		currentShape = ''; 
	}
}); 

shapeContainer.addEventListener('click', (e) => {
	if (e.target.classList.contains('square-shape')) {
		currentShape = e.target.value; 
		currentTool = ''; 
	}
});

colorContainer.addEventListener('click', (e) => {
	if (e.target.classList.contains('square-color')) {
		currentColor = e.target.value; 
		colorFunctions[currentColor](); 
		colorContainer.querySelectorAll('.square-color').forEach(input => input.checked = input === e.target);
	}
}); 

const drawOnGrid = (e) => {
	colorFunctions[currentColor](); 

	if (!previousSquare) {
		e.target.style.backgroundColor = squareColor; 
		return; 
	}; 

	let line = findLine(getCoords(previousSquare, gridContainer), getCoords(e.target, gridContainer), gridContainer); 
	line.forEach(square => square.style.backgroundColor = squareColor); 
}; 

const eraseGrid = (e) => {
	if (!previousSquare) {
		e.target.style.backgroundColor = '#fff'
		return; 
	}; 

	let line = findLine(getCoords(previousSquare, gridContainer), getCoords(e.target, gridContainer), gridContainer); 
	line.forEach(square => square.style.backgroundColor = '#fff'); 
}; 

const selectColorGrid = (e) => {
	const newColor = getColor(e.target)
		.split(/\D/)
		.filter(s => s)
		.map(color => Number(color).toString(16).padStart(2, 0))
		.join('');

	squareColor = squareColorInput.value = `#${newColor || 'FFFFFF'}`; 
}; 

const fillColorGrid = () => {
	let changedElements = []; 

	function findSibling(el, index, oldColor) {
		let parent = el.parentNode; 
		let currColor = getColor(el); 

		if (changedElements.some(changedEl => changedEl == el)) return; 
		if (oldColor != currColor) return; 

		changedElements.push(el); 

		if (parent.nextElementSibling) {
			let parentNextSiblingChildren = Array.from(parent.nextElementSibling.children); 
			findSibling(parentNextSiblingChildren[index], index, oldColor); 
		}

		if (parent.previousElementSibling) {
			let parentPrevSiblingChildren = Array.from(parent.previousElementSibling.children); 
			findSibling(parentPrevSiblingChildren[index], index, oldColor); 
		}

		if (el.nextElementSibling) {
			findSibling(el.nextElementSibling, index + 1, oldColor); 
		}

		if (el.previousElementSibling) {
			findSibling(el.previousElementSibling, index - 1, oldColor);
		}
	}

	function handleClick(e) {
		if (e.target.nodeName !== 'SPAN') return;
		gridContainer.onclick = ''; 

		findSibling(e.target, getCoords(e.target, gridContainer).x, getColor(e.target)); 
		colorFunctions[currentColor](); 
		changedElements.forEach(el => el.style.backgroundColor = squareColor); 
	}

	gridContainer.onclick = (e) => handleClick(e); 
}; 

const lightenColorGrid = (e) => {
	if (!previousSquare) {
		e.target.style.backgroundColor = adjustBrightness(0.2, getColor(e.target)); 
		return; 
	}; 

	let line = findLine(getCoords(previousSquare, gridContainer), getCoords(e.target, gridContainer), gridContainer);  
	line.forEach(square => square.style.backgroundColor = adjustBrightness(0.2, getColor(square))); 
}; 

const darkenColorGrid = (e) => {
	if (!previousSquare) {
		e.target.style.backgroundColor = adjustBrightness(-0.2, getColor(e.target)); 
		return; 
	}; 

	let line = findLine(getCoords(previousSquare, gridContainer), getCoords(e.target, gridContainer), gridContainer); 
	line.forEach(square => square.style.backgroundColor = adjustBrightness(-0.2, getColor(square))); 
}; 

const toolFunctions = {
	'draw': drawOnGrid, 
	'erase': eraseGrid, 
	'fill': fillColorGrid, 
	'select': selectColorGrid, 
	'lighten': lightenColorGrid, 
	'darken': darkenColorGrid, 
}; 

const drawRectangle = (e) => {
	if (!previousSquare) {
		previousSquare = e.target; 
		document.querySelectorAll('.temp-rectangle').forEach(square => square.classList.remove('temp-rectangle')); 
		return; 
	}

	document.querySelectorAll('.temp-rectangle').forEach(square => {
		square.style.backgroundColor = gridBackgroundColorInput.value; 
		square.classList.remove('temp-rectangle'); 
	}); 

	colorFunctions[currentColor](); 

	let {x: x1, y: y1} = getCoords(previousSquare, gridContainer); 
	let {x: x2, y: y2} = getCoords(e.target, gridContainer); 

	let rectangle = []; 

	for (let x = (x1 > x2 ? x2 : x1); x <= (x1 >= x2 ? x1 : x2); x++) {
		rectangle.push(...findLine({x, y: y1}, {x, y: y1 + (y2 - y1)}, gridContainer)); 
	}

	rectangle.forEach(square => {
		square.style.backgroundColor = squareColor; 
		square.classList.add('temp-rectangle'); 
	}); 
}; 

const drawCircle = (e) => {
	if (!previousSquare) {
		previousSquare = e.target; 
		document.querySelectorAll('.temp-circle').forEach(square => square.classList.remove('temp-circle')); 
		return; 
	}

	document.querySelectorAll('.temp-circle').forEach(square => {
		square.style.backgroundColor = gridBackgroundColorInput.value; 
		square.classList.remove('temp-circle'); 
	}); 

	colorFunctions[currentColor](); 

	let {x: x1, y: y1} = getCoords(previousSquare, gridContainer); 
	let {x: x2, y: y2} = getCoords(e.target, gridContainer); 

	let circle = []; 

	let radius = Math.ceil(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
	for (let dy = -radius; dy <= radius; dy++) {
		for (let dx = -radius; dx <= radius; dx++) {
			let dist = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
			if (dist > radius) continue;
			let y = y1 + dy, x = x1 + dx;
			if (y < 0 || y >= gridHeight || x < 0 || x >= gridWidth) continue;
			circle.push(getPoint(x, y, gridContainer));
		}
	}

	circle.forEach(square => {
		square.style.backgroundColor = squareColor; 
		square.classList.add('temp-circle'); 
	}); 
}; 

const drawLine = (e) => {
	if (!previousSquare) {
		previousSquare = e.target; 
		document.querySelectorAll('.temp-line').forEach(square => square.classList.remove('temp-line')); 
		return; 
	}

	document.querySelectorAll('.temp-line').forEach(square => {
		square.style.backgroundColor = gridBackgroundColorInput.value; 
		square.classList.remove('temp-line'); 
	}); 

	colorFunctions[currentColor](); 

	let {x: x1, y: y1} = getCoords(previousSquare, gridContainer); 
	let {x: x2, y: y2} = getCoords(e.target, gridContainer); 

	findLine({x: x1, y: y1}, {x: x2, y: y2}, gridContainer).forEach(square => {
		square.style.backgroundColor = squareColor; 
		square.classList.add('temp-line'); 
	}); 
}; 

const shapeFunctions = {
	'rectangle': drawRectangle, 
	'circle': drawCircle,
	'line': drawLine, 
}; 

gridContainer.addEventListener('mouseover', (e) => {
	e.preventDefault(); 
	if (!isControlDown || e.target.nodeName !== 'SPAN') return; 
	
	if (currentTool) {
		toolFunctions[currentTool](e);
		previousSquare = e.target; 
	}

	if (currentShape) {
		shapeFunctions[currentShape](e); 
	}
}); 

document.addEventListener('keydown', (e) => isControlDown = e.ctrlKey || e.metaKey);
document.addEventListener('keyup', (e) => {
	if (!e.ctrlKey) {
		isControlDown = false; 
		previousSquare = undefined; 
	}
});

/********* Actions *********/

const saveButton = document.querySelector('.action-save'); 
const clearButton = document.querySelector('.action-clear'); 

saveButton.addEventListener('click', () => {
	let size = 5; 

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

	let link = document.createElement('a'); 
	link.href = canvas.toDataURL(); 
	link.download = 'etchasketch.png'; 

	document.body.appendChild(link);
	link.click();
	link.remove();
}); 

clearButton.addEventListener('click', createNewGrid);