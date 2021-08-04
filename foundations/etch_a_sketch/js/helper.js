export const createGridElement = () => {
	const spanElem = document.createElement('span'); 
	spanElem.classList.add('grid-elem'); 
	return spanElem;
}; 

export const createGridDivider = () => {
	const divideElem = document.createElement('div'); 
	divideElem.classList.add('grid-divider');
	divideElem.classList.add('flex-row'); 
	return divideElem; 
}

export const testValue = (val, min, max) => val >= min && val <= max; 

export const getCoords = (point, grid) => {
	let x = Array.from(point.parentNode.children).indexOf(point); 
	let y = Array.from(grid.children).indexOf(point.parentNode); 

	return {x, y}; 
}; 

export const getColor = (point) => window.getComputedStyle(point).getPropertyValue('background-color'); 

export const findLine = (point1, point2, grid) => {
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

export const adjustBrightness = (percent, color) => {
	let [red, green, blue] = color.split(/\D/).filter(i => i); 
	let base = percent < 0 ? 0 : 255 * percent; 
	let multiply = percent < 0 ? 1 + percent: 1 - percent;
    return `rgb(${Math.round(+red * multiply + base)}, ${Math.round(+green * multiply + base)}, ${Math.round(+blue * multiply + base)})`;
}; 
