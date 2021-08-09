export const createGridPoint = (pointColor) => {
	const spanElem = document.createElement('span'); 
	spanElem.classList.add('grid-point'); 
	spanElem.style.backgroundColor = pointColor; 
	return spanElem;
}; 

export const createGridRow = () => {
	const dividerElem = document.createElement('div'); 
	dividerElem.classList.add('grid-row');
	dividerElem.classList.add('flex-row'); 
	return dividerElem; 
}; 

export const testValue = (val, min, max) => val >= min && val <= max; 

export const getCoords = (point, grid) => {
	const x = Array.from(point.parentNode.children).indexOf(point); 
	const y = Array.from(grid.children).indexOf(point.parentNode); 

	return {x, y}; 
}; 

export const getPoint = (x, y, grid) => {
	const currParent = Array.from(grid.children)[y]; 
	return Array.from(currParent.children)[x]; 
}

export const getColor = (point) => window.getComputedStyle(point).getPropertyValue('background-color'); 

export const findLine = (point1, point2, grid) => {
	let line = []; 
	let {x: x1, y: y1} = point1; 
	let {x: x2, y: y2} = point2; 

	if (Math.abs(x2 - x1) > Math.abs(y2 - y1)) {
		if (x1 > x2) [x1, y1, x2, y2] = [x2, y2, x1, y1]; 
		const slope = (y2 - y1) / (x2 - x1);

		for (let x = x1, y = y1; x <= x2; x++) {
			line.push(getPoint(x, Math.round(y), grid)); 
			y += slope; 
		}
	} else {
		if (y1 > y2) [x1, y1, x2, y2] = [x2, y2, x1, y1]; 
		const slope = (x2 - x1) / (y2 - y1);

		for (let x = x1, y = y1; y <= y2; y++) {
			line.push(getPoint(Math.round(x), y, grid)); 
			x += slope; 
		}
	}

	return line; 
}; 

export const rgbToHex = (rgb) => `#${rgb.split(/\D/).filter(s => s).map(color => Number(color).toString(16).padStart(2, 0)).join('')}`;

export const generateRandomColor = () => {
	const newRGBValue = () => Math.floor(Math.random() * 256); 
	return `rgb(${newRGBValue()}, ${newRGBValue()}, ${newRGBValue()})`; 
}; 

export const adjustBrightness = (percent, color) => {
	let [red, green, blue] = color.split(/\D/).filter(i => i); 
	let base = percent < 0 ? 0 : 255 * percent; 
	let multiply = percent < 0 ? 1 + percent: 1 - percent;
    return `rgb(${Math.round(+red * multiply + base)}, ${Math.round(+green * multiply + base)}, ${Math.round(+blue * multiply + base)})`;
}; 
