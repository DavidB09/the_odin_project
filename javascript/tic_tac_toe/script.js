'use strict';

const startOverlay = document.querySelector('div.start-game');
const playOverlay = document.querySelector('div.play-game');

const player1SVG = document.querySelector('svg.user1 g');
const player2SVG = document.querySelector('svg.user2 g use');

const humanBtn = document.querySelector('button.human');
const cpuBtn =document.querySelector('button.cpu');
const selectorContainer = document.querySelector('.player-container:last-child div:last-child');
let oppIsCPU = false;

humanBtn.addEventListener('click', () => {
    player2SVG.setAttribute('xlink:href', '#astronaut');
    humanBtn.classList.add('selected');
    cpuBtn.classList.remove('selected');
    hideElements(selectorContainer);
});

cpuBtn.addEventListener('click', () => {
    player2SVG.setAttribute('xlink:href', '#machine');
    cpuBtn.classList.add('selected');
    humanBtn.classList.remove('selected');
    showElements(selectorContainer);
});

const levelBtns = selectorContainer.querySelectorAll('button');
const easyBtn = selectorContainer.querySelector('button.easy');
const hardBtn = selectorContainer.querySelector('button.hard');
const impossibleBtn = selectorContainer.querySelector('button.impossible');
let gameLevel = 0;

const playBtn = document.querySelector('button.play');

selectorContainer.addEventListener('click', (e) => {
    let target = e.target;
    gameLevel = target.classList.contains('easy') ? 0 : target.classList.contains('hard') ? 1 : target.classList.contains('impossible') ? 2 : gameLevel;

    levelBtns.forEach(btn => btn == target ? btn.classList.add('selected') : btn.classList.remove('selected'));
});

playBtn.addEventListener('click', () => {
    hideElements(startOverlay);
    showElements(playOverlay);
});

const gridLayers = document.querySelectorAll('.grid-layer');

function playGame() {
    let grid = [
        [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ],
        [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ],
        [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]
    ];

    movePlayer(grid, true);
}
playGame();

function movePlayer(grid, isPlayer1) {
    const statusHeader = document.querySelector('.play-game h1');
    document.querySelector('.play-game h1').innerText = `Player ${isPlayer1 ? '1' : '2'}`;

    playOverlay.addEventListener('click', function handleClick(e) {
        let target = e.target.closest('div.grid-layer div');
        if (!target) return;

        let layer = target.closest('div.grid-layer');
        let layerIndex = Array.prototype.indexOf.call(gridLayers, layer);
        let squareIndex = Array.prototype.indexOf.call(layer.children, target);

        let row = Math.floor(squareIndex / 3);
        let column = squareIndex % 3;

        if (grid[layerIndex][row][column]) return;

        grid[layerIndex][row][column] = isPlayer1 ? 1 : 2;
        target.innerHTML = `<p>${isPlayer1 ? 'X' : 'O'}</p>`;

        playOverlay.removeEventListener('click', handleClick);
        let done = isDone(grid);
        if (done) {
            const restartBtn = document.querySelector('button.restart');
            restartBtn.addEventListener('click', playGame);

            statusHeader.innerText = `Player ${oppIsCPU || isPlayer1 ? '1' : '2'} Wins!`;
            showElements(restartBtn);
            return;
        }
        oppIsCPU ? moveCPU() : movePlayer(grid, !isPlayer1);
    });
}

function isDone(grid) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            //Check rows of each layer
            if (grid[i][j][0] && (grid[i][j][0] == grid[i][j][1]) && (grid[i][j][0] == grid[i][j][2])) {
                let player = grid[i][j][0];
                player == 1 ? console.log('player 1') : console.log('player 2');

                let gridLayer = [...document.querySelectorAll('.grid-layer')][i];
                let gridRow = [...gridLayer.querySelectorAll('div')];
                gridRow.forEach((square, index) => Math.floor(index / 3) == j ? square.style.backgroundColor = 'pink' : null);
                return true;
            }

            //Check columns of each layer
            if (grid[i][0][j] && (grid[i][0][j] == grid[i][1][j]) &&  (grid[i][0][j] == grid[i][2][j])) {
                let player = grid[i][0][j];
                player == 1 ? console.log('player 1') : console.log('player 2');

                let gridLayer = [...document.querySelectorAll('.grid-layer')][i];
                let gridRow = [...gridLayer.querySelectorAll('div')];
                gridRow.forEach((square, index) => index % 3 == j ? square.style.backgroundColor = 'pink' : null);
                return true;
            }

            //Check down each layer
            if (grid[0][i][j] && (grid[0][i][j] == grid[1][i][j]) &&  (grid[0][i][j] == grid[2][i][j])) {
                let player = grid[0][i][j];
                player == 1 ? console.log('player 1') : console.log('player 2');

                let gridLayer = [...document.querySelectorAll('.grid-layer')];
                gridLayer.forEach(layer => {
                    [...layer.querySelectorAll('div')][i * 3 + j].style.backgroundColor = 'pink';
                });
            }
        }
    }

    //Check diagonals in each layer
    grid.forEach((layer, i) => {
        if (layer[0][0] && (layer[0][0] == layer[1][1]) && (layer[0][0] == layer[2][2])) {
            let player = layer[0][0];
            player == 1 ? console.log('player 1') : console.log('player 2');

            let gridLayer = [...document.querySelectorAll('.grid-layer')][i];
            let gridRow = [...gridLayer.querySelectorAll('div')];
            gridRow[0 * 3 + 0].style.backgroundColor = 'pink';
            gridRow[1 * 3 + 1].style.backgroundColor = 'pink';
            gridRow[2 * 3 + 2].style.backgroundColor = 'pink';
            return true;
        }

        if (layer[0][2] && (layer[0][2] == layer[1][1]) && (layer[0][2] == layer[2][0])) {
            let player = layer[0][2];
            player == 1 ? console.log('player 1') : console.log('player 2');

            let gridLayer = [...document.querySelectorAll('.grid-layer')][i];
            let gridRow = [...gridLayer.querySelectorAll('div')];
            gridRow[0 * 3 + 2].style.backgroundColor = 'pink';
            gridRow[1 * 3 + 1].style.backgroundColor = 'pink';
            gridRow[2 * 3 + 0].style.backgroundColor = 'pink';
            return true;
        }
    });

    //Check diagonals through layer
    //Top:Top:Left -> Bottom:Bottom:Right
    if (grid[0][0][0] && (grid[0][0][0] == grid[1][1][1]) && (grid[0][0][0] == grid[2][2][2])) {
        let player = grid[0][0][0];
        player == 1 ? console.log('player 1') : console.log('player 2');

        let gridLayers = [...document.querySelectorAll('.grid-layer')].map(layer => [...layer.querySelectorAll('div')]);

        gridLayers[0][0 * 3 + 0].style.backgroundColor = 'pink';
        gridLayers[1][1 * 3 + 1].style.backgroundColor = 'pink';
        gridLayers[2][2 * 3 + 2].style.backgroundColor = 'pink';
        return true;
    }

    //Top:Bottom:Right -> Bottom:Top:Left
    if (grid[0][2][2] && (grid[0][2][2] == grid[1][1][1]) && (grid[0][2][2] == grid[2][0][0])) {
        let player = grid[0][2][2];
        player == 1 ? console.log('player 1') : console.log('player 2');

        let gridLayers = [...document.querySelectorAll('.grid-layer')].map(layer => [...layer.querySelectorAll('div')]);

        gridLayers[0][2 * 3 + 2].style.backgroundColor = 'pink';
        gridLayers[1][1 * 3 + 1].style.backgroundColor = 'pink';
        gridLayers[2][0 * 3 + 0].style.backgroundColor = 'pink';
        return true;
    }

    //Top:Top:Right ->Bottom:Bottom:Left
    if (grid[0][0][2] && (grid[0][0][2] == grid[1][1][1]) && (grid[0][0][2] == grid[2][2][0])) {
        let player = grid[0][0][2];
        player == 1 ? console.log('player 1') : console.log('player 2');

        let gridLayers = [...document.querySelectorAll('.grid-layer')].map(layer => [...layer.querySelectorAll('div')]);

        gridLayers[0][0 * 3 + 2].style.backgroundColor = 'pink';
        gridLayers[1][1 * 3 + 1].style.backgroundColor = 'pink';
        gridLayers[2][2 * 3 + 0].style.backgroundColor = 'pink';
        return true;
    }

    //Top:Bottom:Left -> Bottom:Top:Right
    if (grid[0][2][0] && (grid[0][2][0] == grid[1][1][1]) && (grid[0][2][0] == grid[2][0][2])) {
        let player = grid[0][2][0];
        player == 1 ? console.log('player 1') : console.log('player 2');

        let gridLayers = [...document.querySelectorAll('.grid-layer')].map(layer => [...layer.querySelectorAll('div')]);

        gridLayers[0][2 * 3 + 0].style.backgroundColor = 'pink';
        gridLayers[1][1 * 3 + 1].style.backgroundColor = 'pink';
        gridLayers[2][0 * 3 + 2].style.backgroundColor = 'pink';
        return true;
    }

    return false;
}

function moveCPU() {

}

function hideElements(...elements) {
    elements.forEach(el => el.classList.add('hidden'));
}

function showElements(...elements) {
    elements.forEach(el => el.classList.remove('hidden'));
}

