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

const testValue = (val, min, max) => val >= min && val <= max; 

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


/************ SQUARE ******************/
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

const getCoords = (point, grid) => {
	let x = Array.from(point.parentNode.children).indexOf(point); 
	let y = Array.from(grid.children).indexOf(point.parentNode); 

	return {x, y}; 
}; 

const getColor = (point) => {
	return window.getComputedStyle(point).getPropertyValue('background-color'); 
}; 

const findLine = (point1, point2, grid) => {
	const findPoint = (x, y) => {
		let currentParent = Array.from(grid.children)[y]; 

		return Array.from(currentParent.children)[x]; 
	}; 

	let points = []; 
	let {x: x1, y: y1} = point1; 
	let {x: x2, y: y2} = point2; 

	if (Math.abs(x2 - x1) > Math.abs(y2 - y1)) {
		if (x1 > x2) [x1, y1, x2, y2] = [x2, y2, x1, y1]; 
		let slope = (y2 - y1) / (x2 - x1);
		for (let x = x1, y = y1; x <= x2; x++) {
			points.push(findPoint(x, Math.round(y))); 
			y += slope; 
		}
	} else {
		if (y1 > y2) [x1, y1, x2, y2] = [x2, y2, x1, y1]; 
		let slope = (x2 - x1) / (y2 - y1);
		for (let x = x1, y = y1; y <= y2; y++) {
			points.push(findPoint(Math.round(x), y)); 
			x += slope; 
		}
	}

	return points; 
}; 

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


const adjustBrightness = (percent, color) => {
	let [red, green, blue] = color.split(/\D/).filter(i => i); 
	let base = percent < 0 ? 0 : 255 * percent; 
	let multiply = percent < 0 ? 1 + percent: 1 - percent;
    return `rgb(${Math.round(+red * multiply + base)}, ${Math.round(+green * multiply + base)}, ${Math.round(+blue * multiply + base)})`;
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