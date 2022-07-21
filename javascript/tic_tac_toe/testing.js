import CPU from './CPU.js';
import Player from './Player.js';

'use strict';

const TicTacToe = () => {
    const startOverlay = document.querySelector('div.start-game');
    const playOverlay = document.querySelector('div.play-game');
    const playBtn = startOverlay.querySelector('button.play');
    const restartBtn = playOverlay.querySelector('button.restart');

    let grid;
    const gridLayers = [...playOverlay.querySelectorAll('.grid-layer')].map(layer => [...layer.children]);

    let player1, player2;
    let play1Name, play2Name;
    let play1IsCPU, play2IsCPU;

    let statusHeader = playOverlay.querySelector('h1');
    let winner;

    function init() {
        const typeSelectors = startOverlay.querySelectorAll('.player-container .type-selector');
        const playerSVGs = startOverlay.querySelectorAll('.player-container .player-svg use');
        const nameInputs = startOverlay.querySelectorAll('.player-container input');

        play2IsCPU = play1IsCPU = false;
        startOverlay.querySelectorAll('button.human').forEach(btn => btn.classList.add('selected'));
        playerSVGs.forEach(svg => svg.setAttribute('xlink:href', '#astronaut'));

        play1Name = 'Player 1';
        play2Name = 'Player 2';
        nameInputs[0].value = play1Name;
        nameInputs[1].value = play2Name;

        typeSelectors.forEach((selector, player) => selector.addEventListener('click', (e) => {
            const clickedBtn = e.target.closest('button');
            if (!clickedBtn) return;

            if (player == 0) {
                play1IsCPU = clickedBtn.classList.contains('cpu');
                playerSVGs[0].setAttribute('xlink:href', play1IsCPU ? '#machine' : '#astronaut');
            }

            if (player == 1) {
                play2IsCPU = clickedBtn.classList.contains('cpu');
                playerSVGs[1].setAttribute('xlink:href', play2IsCPU ? '#machine' : '#astronaut');
            }

            clickedBtn.classList.add('selected');
            clickedBtn.nextElementSibling?.classList.remove('selected')
                || clickedBtn.previousElementSibling?.classList.remove('selected');
        }));

        nameInputs.forEach((input, player) => input.addEventListener('change', () => {
            if (!input.value.trim()) input.value = `Player ${player + 1}`;
            if (player == 0) play1Name = input.value;
            if (player == 1) play2Name = input.value;
        }));

        playBtn.addEventListener('click', () => {
            player1 = play1IsCPU ? CPU(grid, 1) : Player(playOverlay);
            player2 = play2IsCPU ? CPU(grid, 2) : Player(playOverlay);
            winner = 0;

            hideElements(startOverlay);
            showElements(playOverlay);

            clearGrid();
            playGame(true);
        });

        restartBtn.addEventListener('click', () => {
            hideElements(restartBtn, playOverlay);
            showElements(startOverlay);
        });

        hideElements(restartBtn, playOverlay);
    }

    function playGame(isPlayer1) {
        playMove(isPlayer1).then(() => {
            if (isFull() || isDone()) {
                return finishGame();
            } else {
                return playGame(!isPlayer1);
            }
        });
    }

    function playMove(isPlayer1) {
        statusHeader.innerText = isPlayer1 ? play1Name : play2Name;

        return new Promise(resolve => resolve(isPlayer1 ? player1.playMove(grid) : player2.playMove(grid)))
            .then(({layer, row, column}) => {
                grid[layer][row][column] = isPlayer1 ? 1 : 2;
                gridLayers[layer][row * 4 + column].innerHTML = `<p>${isPlayer1 ? 'X' : 'O'}</p>`;
            });
    }

    function finishGame() {
        if (winner) {
            statusHeader.innerText = `${winner == 1 ? play1Name : play2Name} Wins!`;
        } else {
            statusHeader.innerText = 'Tie Game!';
        }
        showElements(restartBtn);
    }

    function clearGrid() {
        grid = [
            [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ],
            [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ],
            [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ],
            [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ],
        ];
        gridLayers.forEach(layer => layer.forEach(square => {
            square.querySelector('p')?.remove();
            square.classList.remove('winner');
        }));
    }

    function isFull() {
        for (let l = 0; l < 4; l++) {
            for (let r = 0; r < 4; r++) {
                if (grid[l][r].some(square => square == 0)) 
                    return false;
            }
        }

        return true;
    }

    function isDone() {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                //Check rows of each layer
                if (grid[i][j][0] && (grid[i][j][0] == grid[i][j][1]) 
                  && (grid[i][j][0] == grid[i][j][2]) && (grid[i][j][0] == grid[i][j][3])) {
                    winner = grid[i][j][0];

                    let gridRow = gridLayers[i];
                    gridRow.forEach((square, index) => {
                        if (Math.floor(index / 4) == j) square.classList.add('winner');
                    });
                    return true;
                }

                //Check columns of each layer
                if (grid[i][0][j] && (grid[i][0][j] == grid[i][1][j]) 
                  && (grid[i][0][j] == grid[i][2][j]) && (grid[i][0][j] == grid[i][3][j])) {
                    winner = grid[i][0][j];

                    let gridRow = gridLayers[i];
                    gridRow.forEach((square, index) => {
                        if (index % 4 == j) square.classList.add('winner');
                    });
                    return true;
                }

                //Check down each layer
                if (grid[0][i][j] && (grid[0][i][j] == grid[1][i][j]) 
                  && (grid[0][i][j] == grid[2][i][j]) && (grid[0][i][j] == grid[3][i][j])) {
                    winner = grid[0][i][j];

                    gridLayers.forEach(layer => {
                        layer[i * 4 + j].classList.add('winner');
                    });
                    return true;
                }
            }
        }

        //Check down each layer diagonally
        for (let i = 0; i < 4; i++) {
            if (grid[0][i][0] && (grid[0][i][0] == grid[1][i][1])
              && (grid[0][i][0] == grid[2][i][2]) && (grid[0][i][0] == grid[3][i][3])) {
                winner = grid[0][i][0];

                gridLayers[0][i * 4 + 0].classList.add('winner');
                gridLayers[1][i * 4 + 1].classList.add('winner');
                gridLayers[2][i * 4 + 2].classList.add('winner');
                gridLayers[3][i * 4 + 3].classList.add('winner');
                return true;
            }

            if (grid[0][i][3] && (grid[0][i][3] == grid[1][i][2])
              && (grid[0][i][3] == grid[2][i][1]) && (grid[0][i][3] == grid[3][i][0])) {
                winner = grid[0][i][3];

                gridLayers[0][i * 4 + 3].classList.add('winner');
                gridLayers[1][i * 4 + 2].classList.add('winner');
                gridLayers[2][i * 4 + 1].classList.add('winner');
                gridLayers[3][i * 4 + 0].classList.add('winner');
                return true;
            }

            if (grid[0][0][i] && (grid[0][0][i] == grid[1][1][i])
              && (grid[0][0][i] == grid[2][2][i]) && (grid[0][0][i] == grid[3][3][i])) {
                winner = grid[0][0][i];

                gridLayers[0][0 * 4 + i].classList.add('winner');
                gridLayers[1][1 * 4 + i].classList.add('winner');
                gridLayers[2][2 * 4 + i].classList.add('winner');
                gridLayers[3][3 * 4 + i].classList.add('winner');
                return true;
            }

            if (grid[0][3][i] && (grid[0][3][i] == grid[1][2][i])
              && (grid[0][3][i] == grid[2][1][i]) && (grid[0][3][i] == grid[3][0][i])) {
                winner = grid[0][3][i];

                gridLayers[0][3 * 4 + i].classList.add('winner');
                gridLayers[1][2 * 4 + i].classList.add('winner');
                gridLayers[2][1 * 4 + i].classList.add('winner');
                gridLayers[3][0 * 4 + i].classList.add('winner');
                return true;
            }
        }

        //Check diagonals in each layer
        for (let l = 0; l < 4; l++) {
            let layer = grid[l];

            if (layer[0][0] && (layer[0][0] == layer[1][1])
              && (layer[0][0] == layer[2][2]) && (layer[0][0] == layer[3][3])) {
                winner = layer[0][0];

                let gridLayer = gridLayers[l];
                gridLayer[0 * 4 + 0].classList.add('winner');
                gridLayer[1 * 4 + 1].classList.add('winner');
                gridLayer[2 * 4 + 2].classList.add('winner');
                gridLayer[3 * 4 + 3].classList.add('winner');
                return true;
            }

            if (layer[0][3] && (layer[0][3] == layer[1][2])
              && (layer[0][3] == layer[2][1]) && (layer[0][3] == layer[3][0])) {
                winner = layer[0][3];

                let gridLayer = gridLayers[l];
                gridLayer[0 * 4 + 3].classList.add('winner');
                gridLayer[1 * 4 + 2].classList.add('winner');
                gridLayer[2 * 4 + 1].classList.add('winner');
                gridLayer[3 * 4 + 0].classList.add('winner');
                return true;
            }
        }

        //Check diagonals through layer
        //Top:Top:Left -> Bottom:Bottom:Right
        if (grid[0][0][0] && (grid[0][0][0] == grid[1][1][1])
          && (grid[0][0][0] == grid[2][2][2]) && (grid[0][0][0] == grid[3][3][3])) {
            winner = grid[0][0][0];

            gridLayers[0][0 * 4 + 0].classList.add('winner');
            gridLayers[1][1 * 4 + 1].classList.add('winner');
            gridLayers[2][2 * 4 + 2].classList.add('winner');
            gridLayers[3][3 * 4 + 3].classList.add('winner');
            return true;
        }

        //Top:Bottom:Right -> Bottom:Top:Left
        if (grid[0][3][3] && (grid[0][3][3] == grid[1][2][2])
          && (grid[0][3][3] == grid[2][1][1]) && (grid[0][3][3] == grid[3][0][0])) {
            winner = grid[0][3][3];

            gridLayers[0][3 * 4 + 3].classList.add('winner');
            gridLayers[1][2 * 4 + 2].classList.add('winner');
            gridLayers[2][1 * 4 + 1].classList.add('winner');
            gridLayers[3][0 * 4 + 0].classList.add('winner');
            return true;
        }

        //Top:Top:Right ->Bottom:Bottom:Left
        if (grid[0][0][3] && (grid[0][0][3] == grid[1][1][2])
          && (grid[0][0][3] == grid[2][2][1]) && (grid[0][0][3] == grid[3][3][0])) {
            winner = grid[0][0][3];

            gridLayers[0][0 * 4 + 3].classList.add('winner');
            gridLayers[1][1 * 4 + 2].classList.add('winner');
            gridLayers[2][2 * 4 + 1].classList.add('winner');
            gridLayers[3][3 * 4 + 0].classList.add('winner');
            return true;
        }
    
        //Top:Bottom:Left -> Bottom:Top:Right
        if (grid[0][3][0] && (grid[0][3][0] == grid[1][2][1])
          && (grid[0][3][0] == grid[2][1][2]) && (grid[0][3][0] == grid[3][0][3])) {
            winner = grid[0][3][0];

            gridLayers[0][3 * 4 + 0].classList.add('winner');
            gridLayers[1][2 * 4 + 1].classList.add('winner');
            gridLayers[2][1 * 4 + 2].classList.add('winner');
            gridLayers[3][0 * 4 + 3].classList.add('winner');
            return true;
        }

        return false;
    }

    function hideElements(...elements) {
        elements.forEach(el => el.classList.add('hidden'));
    }

    function showElements(...elements) {
        elements.forEach(el => el.classList.remove('hidden'));
    }

    return {
        init
    };
};

const newGame = TicTacToe();
newGame.init();