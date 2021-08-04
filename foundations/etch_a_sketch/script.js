import { createGridElement, createGridDivider, testValue } from "./js/helper.js";
import { getCoords, getColor, findLine, adjustBrightness } from "./js/helper.js";

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

const createNewGrid = () => {
	if (!heightChange || !widthChange) return; 

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

let currentTool = 'draw'; 

const colorContainer = document.querySelector('.square-color-container'); 
const squareColorInput = document.querySelector('.input-square-color'); 

let currentColor = 'black'; 
let squareColor = '#000'; 

let previousSquare; 
let previousTool; 

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
		previousTool = currentTool; 
		currentTool = e.target.value; 
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

gridContainer.addEventListener('mouseover', (e) => {
	e.preventDefault(); 
	if (!isControlDown || e.target.nodeName !== 'SPAN') return; 
		
	toolFunctions[currentTool](e);
	previousSquare = e.target; 
}); 

document.addEventListener('keydown', (e) => isControlDown = e.ctrlKey || e.metaKey);
document.addEventListener('keyup', (e) => {
	if (!e.ctrlKey) {
		isControlDown = false; 
		previousSquare = undefined; 
	}
});