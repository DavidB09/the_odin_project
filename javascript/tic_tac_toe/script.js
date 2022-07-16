const player1SVG = document.querySelector('svg.user1 g');
const player2SVG = document.querySelector('svg.user2 g use');

const humanBtn = document.querySelector('button.human');
const cpuBtn =document.querySelector('button.cpu');
const selectorContainer = document.querySelector('.player-container:last-child div:last-child');

console.log(selectorContainer);

humanBtn.addEventListener('click', () => {
    player2SVG.setAttribute('xlink:href', '#astronaut');
    humanBtn.classList.add('selected');
    cpuBtn.classList.remove('selected');
    selectorContainer.style.display = 'none';
});

cpuBtn.addEventListener('click', () => {
    player2SVG.setAttribute('xlink:href', '#machine');
    cpuBtn.classList.add('selected');
    humanBtn.classList.remove('selected');
    selectorContainer.style.display = 'flex';
})