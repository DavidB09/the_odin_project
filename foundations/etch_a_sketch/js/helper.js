export const createGridElement = (color) => {
	const spanElem = document.createElement('span'); 
	spanElem.classList.add('grid-elem'); 
	spanElem.style.backgroundColor = color; 
	return spanElem;
}; 

export const createGridDivider = () => {
	const divideElem = document.createElement('div'); 
	divideElem.classList.add('grid-divider');
	divideElem.classList.add('flex-row'); 
	return divideElem; 
}; 

export const testValue = (val, min, max) => val >= min && val <= max; 

export const getCoords = (point, grid) => {
	let x = Array.from(point.parentNode.children).indexOf(point); 
	let y = Array.from(grid.children).indexOf(point.parentNode); 

	return {x, y}; 
}; 

export const getPoint = (x, y, grid) => {
	let currentParent = Array.from(grid.children)[y]; 
	return Array.from(currentParent.children)[x]; 
}

export const getColor = (point) => window.getComputedStyle(point).getPropertyValue('background-color'); 

export const rgbToHex = (rgb) => rgb.split(/\D/).filter(s => s).map(color => Number(color).toString(16).padStart(2, 0)).join('');

export const findLine = (point1, point2, grid) => {
	let points = []; 
	let {x: x1, y: y1} = point1; 
	let {x: x2, y: y2} = point2; 

	if (Math.abs(x2 - x1) > Math.abs(y2 - y1)) {
		if (x1 > x2) [x1, y1, x2, y2] = [x2, y2, x1, y1]; 
		let slope = (y2 - y1) / (x2 - x1);
		for (let x = x1, y = y1; x <= x2; x++) {
			points.push(getPoint(x, Math.round(y), grid)); 
			y += slope; 
		}
	} else {
		if (y1 > y2) [x1, y1, x2, y2] = [x2, y2, x1, y1]; 
		let slope = (x2 - x1) / (y2 - y1);
		for (let x = x1, y = y1; y <= y2; y++) {
			points.push(getPoint(Math.round(x), y, grid)); 
			x += slope; 
		}
	}

	return points; 
}; 

export const adjustBrightness = (percent, color) => {
	let [red, green, blue] = color.split(/\D/).filter(i => i); 
	let base = percent < 0 ? 0 : 255 * percent; 
	let multiply = percent < 0 ? 1 + percent: 1 - percent;
    return `rgb(${Math.round(+red * multiply + base)}, ${Math.round(+green * multiply + base)}, ${Math.round(+blue * multiply + base)})`;
}; 
