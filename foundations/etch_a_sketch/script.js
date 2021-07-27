/********* GRID  ****************/
const gridContainer = document.querySelector('.main-grid');
let gridHeight = 0; 
let gridWidth = 0; 

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

const createNewGridElem = () => {
	const spanElem = document.createElement('span'); 
	spanElem.classList.add('grid-elem'); 
	return spanElem;
}; 

const createNewGridDivider = () => {
	const divideElem = document.createElement('div'); 
	divideElem.classList.add('grid-divider');
	divideElem.classList.add('flex-row'); 
	return divideElem; 
}

const updateGridHeight = () => {
	let currentHeight = gridContainer.querySelectorAll('.grid-divider').length; 

	while (currentHeight != gridHeight) {
		if (currentHeight < gridHeight) {
			gridContainer.appendChild(createNewGridDivider()); 
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
				divider.appendChild(createNewGridElem()); 
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

const testGridSize = (val) => val > 0 && val <= 100; 

gridHeightInput.addEventListener('input', () => {
	if (!testGridSize(gridHeightInput.value)) return; 

	heightChange = true; 
	gridHeight = +gridHeightInput.value; 
}); 

gridWidthInput.addEventListener('input', () => {
	if (!testGridSize(gridWidthInput.value)) return; 

	widthChange = true; 
	gridWidth = +gridWidthInput.value; 
}); 

gridSizeInput.addEventListener('input', () => {
	if (!testGridSize(gridSizeInput.value)) return; 

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


/************ SQUARE ******************/
let isControlDown = false; 

const toolContainer = document.querySelector('.square-tool-container'); 

let currentTool = 'draw'; 

const colorContainer = document.querySelector('.square-color-container'); 
const squareColorInput = document.querySelector('.input-square-color'); 

let currentColor = 'black'; 
let squareColor = '#000'; 

toolContainer.addEventListener('click', (e) => {
	if (e.target.classList.contains('square-tool')) {
		currentTool = e.target.value; 
	}
}); 

colorContainer.addEventListener('click', (e) => {
	if (e.target.classList.contains('square-color')) {
		currentColor = e.target.value; 
		colorContainer.querySelectorAll('.square-color').forEach(input => input.checked = input === e.target);
	}
}); 

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
	console.log(squareColor);
}; 

const colorFunctions = {
	'black': drawBlack, 
	'rainbow': drawRainbow, 
	'color': drawColor, 
}; 

const drawOnGrid = (e) => {
	colorFunctions[currentColor](); 
	e.target.style.backgroundColor = squareColor; 
}; 

const eraseGrid = (e) => {
	e.target.style.backgroundColor = '#fff'; 
}; 

const selectColorGrid = (e) => {
	const newColor = e.target.style.backgroundColor
		.split(/\D/)
		.filter(s => s)
		.map(color => Number(color).toString(16).padStart(2, 0))
		.join('');

	squareColor = squareColorInput.value = `#${newColor || 'FFFFFF'}`; 
}; 

const toolFunctions = {
	'draw': drawOnGrid, 
	'erase': eraseGrid, 
	'select': selectColorGrid, 
}; 

gridContainer.addEventListener('mouseover', (e) => {
	e.preventDefault(); 
	if (!isControlDown || e.target.nodeName !== 'SPAN') return; 
	
	toolFunctions[currentTool](e);  
}); 

document.addEventListener('keydown', (e) => isControlDown = e.ctrlKey || e.metaKey);
document.addEventListener('keyup', () => isControlDown = false);