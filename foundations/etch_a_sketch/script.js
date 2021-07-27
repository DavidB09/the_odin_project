
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

let isMouseDown = false; 

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

const squareColor = 0; 

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