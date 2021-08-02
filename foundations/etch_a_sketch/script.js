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

const findNodeIndex = (square) => Array.from(square.parentNode.children).indexOf(square); 

const findIndexNode = (xAxis, yAxis) => {
	let currentParent = Array.from(gridContainer.children)[yAxis]; 

	return Array.from(currentParent.children)[xAxis]; 
}; 

const findSquareLine = (firstSquare, secondSquare) => {
	let squares = []; 
	let startX = findNodeIndex(firstSquare); 
	let startY = findNodeIndex(firstSquare.parentNode); 
	let endX = findNodeIndex(secondSquare); 
	let endY = findNodeIndex(secondSquare.parentNode); 

	if (Math.abs(endX - startX) > Math.abs(endY - startY)) {
		if (startX > endX) [startX, startY, endX, endY] = [endX, endY, startX, startY]; 
		let slope = (endY - startY) / (endX - startX);
		for (let x = startX, y = startY; x <= endX; x++) {
			squares.push(findIndexNode(x, Math.round(y))); 
			y += slope; 
		}
	} else {
		if (startY > endY) [startX, startY, endX, endY] = [endX, endY, startX, startY]; 
		let slope = (endX - startX) / (endY - startY);
		for (let x = startX, y = startY; y <= endY; y++) {
			squares.push(findIndexNode(Math.round(x), y)); 
			x += slope; 
		}
	}

	return squares; 
}

const drawOnGrid = (e) => {
	colorFunctions[currentColor](); 

	if (!previousSquare) {
		e.target.style.backgroundColor = squareColor; 
		return; 
	}; 

	let line = findSquareLine(previousSquare, e.target); 
	line.forEach(square => square.style.backgroundColor = squareColor); 
}; 

const eraseGrid = (e) => {
	if (!previousSquare) {
		e.target.style.backgroundColor = '#fff'
		return; 
	}; 

	let line = findSquareLine(previousSquare, e.target); 
	line.forEach(square => square.style.backgroundColor = '#fff'); 
}; 

const selectColorGrid = (e) => {
	const newColor = window.getComputedStyle(e.target).getPropertyValue('background-color')
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
		let currColor = window.getComputedStyle(el).getPropertyValue('background-color'); 

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

		let elIndex = Array.from(e.target.parentNode.children).indexOf(e.target); 
		let elColor = window.getComputedStyle(e.target).getPropertyValue('background-color'); 

		findSibling(e.target, elIndex, elColor); 
		colorFunctions[currentColor](); 
		changedElements.forEach(el => el.style.backgroundColor = squareColor); 
	}

	gridContainer.onclick = (e) => handleClick(e); 
}; 


const adjustBrightness = (percent, color) => {
    let i = parseInt; 
	let r = Math.round; 
	let [a, b, c, d] = color.split(","); 
	let P = percent < 0; 
	let t = P ? 0 : 255 * percent; 
	P = P ? 1 + percent: 1 - percent;
    return "rgb" + (d ? "a(" : "(") + r(i(a[3] == "a" ? a.slice(5) : a.slice(4)) * P + t) + "," + r(i(b) * P + t) + "," + r(i(c) * P + t) + (d ? "," + d : ")");
}; 

const lightenColorGrid = (e) => {
	let currColor = window.getComputedStyle(e.target).getPropertyValue('background-color'); 

	if (!previousSquare) {
		e.target.style.backgroundColor = adjustBrightness(0.2, currColor); 
		return; 
	}; 

	let line = findSquareLine(previousSquare, e.target); 
	line.forEach(square => square.style.backgroundColor = adjustBrightness(0.2, currColor)); 
}; 

const darkenColorGrid = (e) => {
	let currColor = window.getComputedStyle(e.target).getPropertyValue('background-color'); 

	if (!previousSquare) {
		e.target.style.backgroundColor = adjustBrightness(-0.2, currColor); 
		return; 
	}; 

	let line = findSquareLine(previousSquare, e.target); 
	line.forEach(square => square.style.backgroundColor = adjustBrightness(-0.2, currColor)); 
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