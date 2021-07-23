
const gridContainer = document.querySelector('.main-grid');
let gridHeight, oldGridHeight = 0; 
let gridWidth, oldGridWidth = 0;  

const gridHeightInput = document.querySelector('.input-grid-height'); 
const gridWidthInput = document.querySelector('.input-grid-width'); 
const gridSizeInput = document.querySelector('.input-grid-size'); 
const gridBackgroundColorInput = document.querySelector('.input-grid-background-color'); 
const gridBorderInput = document.querySelector('.input-grid-border'); 

const gridUpdate = document.querySelector('.update-grid'); 
const gridSubmit = document.querySelector('.submit-grid'); 

let isGridHeightInput, isGridWidthInput, isGridSizeInput, isGridBackgroundInput; 

let isMouseDown = false; 

const createNewGrid = () => {
	if ((!isGridHeightInput || !isGridWidthInput) && !isGridSizeInput) return; 

	gridContainer.innerHTML = ''; 
	oldGridHeight = oldGridWidth = 0; 

	updateGridHeight(); 
	updateGridBackgroundColor(); 
	updateGridBorder(); 
}; 

const createNewGridElem = () => {
	let spanElem = document.createElement('span'); 
	spanElem.classList.add('grid-elem'); 
	gridContainer.append(spanElem); 
}; 

const updateGridHeight = () => {
	gridContainer.style.gridTemplateRows = `repeat(${gridHeight}, auto)`; 

	for (let i = 0; i < Math.abs(gridHeight - oldGridHeight) * gridWidth; i++) {
		if (gridHeight < oldGridHeight) gridContainer.removeChild(gridContainer.lastChild); 
		if (gridHeight > oldGridHeight) createNewGridElem(); 
	}; 
}; 

const updateGridWidth = () => {
	gridContainer.style.gridTemplateColumns = `repeat(${gridWidth}, auto)`; 

	for (let i = 0; i < Math.abs(gridWidth - oldGridWidth) * gridHeight; i++) {
		if (gridWidth < oldGridWidth) gridContainer.removeChild(gridContainer.lastChild); 
		if (gridWidth > oldGridWidth) createNewGridElem(); 
	}; 
}; 

const updateGridBackgroundColor = () => {
	gridContainer.style.backgroundColor = gridBackgroundColorInput.value; 
}; 

const updateGridBorder = () => {
	document.querySelector('style').innerHTML = gridBorderInput.checked ? '.main-grid, .grid-elem {border: 1px solid gray;}' 
		: '.main-grid, .grid-elem {border: none;}';
}

const testGridSize = (val) => val > 0 && val <= 100; 

gridHeightInput.addEventListener('input', () => {
	if (!testGridSize(gridHeightInput.value)) return; 

	isGridHeightInput = true; 
	oldGridHeight = gridHeight; 
	gridHeight = gridHeightInput.value; 
}); 

gridWidthInput.addEventListener('input', () => {
	if (!testGridSize(gridWidthInput.value)) return; 

	isGridWidthInput = true; 
	oldGridWidth = gridWidth; 
	gridWidth = gridWidthInput.value; 
}); 

gridSizeInput.addEventListener('input', () => {
	if (!testGridSize(gridSizeInput.value)) return; 

	isGridSizeInput = true; 
	oldGridHeight = gridHeight; 
	oldGridWidth = gridWidth; 
	gridHeight = gridWidth = gridSizeInput.value; 
	gridHeightInput.value = gridWidthInput.value = ''; 
	gridHeightInput.placeholder = gridWidthInput.placeholder = `${gridSizeInput.value}`; 
}); 

gridBackgroundColorInput.addEventListener('input', () => {
	isGridBackgroundInput = true; 
}); 

gridSubmit.addEventListener('click', createNewGrid); 
gridBorderInput.addEventListener('click', updateGridBorder); 

const drawOnGrid = (e) => {
	if (e.target.nodeName === 'SPAN') {
		e.target.style.backgroundColor = '#000'; 
	} 
}; 

gridContainer.addEventListener('mouseover', (e) => {
	if (!isMouseDown) return; 
	drawOnGrid(e); 
})

document.addEventListener('mousedown', function(){
    isMouseDown = true;
});

document.addEventListener('mouseup', function(){
    isMouseDown = false;
});