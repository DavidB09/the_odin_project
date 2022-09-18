/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 197:
/***/ (function() {

//Creates stars for space background
function createStars() {
    const mainDoc = document.querySelector('main');
    const {width, height} = mainDoc.getBoundingClientRect();
    const prevStars = mainDoc.querySelectorAll('span.star').forEach(str => str.remove());

    //Creates 25 <span class="star small | large"> elements
    for (let num = 0; num < 25; num++) {
        let newStar = document.createElement('span');
        newStar.classList.add('star');
        newStar.classList.add(num < 20 ? 'small' : 'large');
        newStar.style.top = `${Math.floor(Math.random() * height)}px`;
        newStar.style.left = `${Math.floor(Math.random() * width)}px`;

        mainDoc.appendChild(newStar);
    }
}

window.addEventListener('load', createStars);
window.addEventListener('resize', createStars);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXTERNAL MODULE: ./src/assets/functions/Stars.js
var Stars = __webpack_require__(197);
;// CONCATENATED MODULE: ./src/assets/svg/astronaut.svg
var astronaut_namespaceObject = __webpack_require__.p + "319e1dfe6a56960d5cc1.svg";
;// CONCATENATED MODULE: ./src/assets/svg/robot.svg
var robot_namespaceObject = __webpack_require__.p + "dc4506e1d65c3db91e01.svg";
;// CONCATENATED MODULE: ./src/assets/functions/CPU.js
const CPU = (newGrid, newPlayer) => {
    let grid = newGrid;
    const player = newPlayer;

    let layer, row, column;
    let isFirstMove = true;

    function playMove(newGrid) {
        grid = newGrid;

        return new Promise(resolve => {
            //Imitate "pause" before generating CPU move
            setTimeout(() => {
                isFirstMove = false;
                resolve(findMove());
            }, isFirstMove && player === 1 ? 4000 : 1200);
        });
    }

    function findMove() {
        //Checks if winning scenarios exists
        if (!isAlmostDone()) {
            //Generate random layer, row, and column selection
            do {
                updateSelection({
                    layer: Math.floor(Math.random() * 4),
                    row: Math.floor(Math.random() * 4),
                    column: Math.floor(Math.random() * 4),
                });
            } while (grid[layer][row][column]);
        }

        return {layer, row, column}; //Returns selected layer, row, and column
    }

    function updateSelection(selection) {
        layer = selection.layer;
        row = selection.row;
        column = selection.column;
    }

    function isAlmostDone() {
        let potentialMoves = []; //Contains all selections that prevent a win from occurring

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {

                 //Check rows of each layer
                let rowCount = getPlayerCount(grid[i][j]);
                //Check if a player has selected 3 squares in a row and the remaining square is empty
                if ((rowCount[1] === 3 || rowCount[2] === 3) && rowCount[0] === 1) {
                    //Add the selection of the last remaining square to potentialMoves
                    potentialMoves.unshift({
                        layer: i,
                        row: j,
                        column: rowCount.emptyIndex,
                        potentialWinner: rowCount[1] > rowCount[2] ? 1 : 2,
                    });

                    //Check if the potential winner is CPU
                    if (potentialMoves[0].potentialWinner === player) {
                        updateSelection(potentialMoves[0]); //Choose recent selection since that means the CPU will win
                        return true;
                    }
                }

                //Check columns of each layer
                let columnCount = getPlayerCount([grid[i][0][j], grid[i][1][j], grid[i][2][j], grid[i][3][j]]);
                if ((columnCount[1] === 3 || columnCount[2] === 3) && columnCount[0] === 1) {
                    potentialMoves.unshift({
                        layer: i,
                        row: columnCount.emptyIndex,
                        column: j,
                        potentialWinner: columnCount[1] > columnCount[2] ? 1 : 2,
                    });

                    if (potentialMoves[0].potentialWinner === player) {
                        updateSelection(potentialMoves[0]);
                        return true;
                    }
                }

                //Check down each layer
                let layerCount = getPlayerCount([grid[0][i][j], grid[1][i][j], grid[2][i][j], grid[3][i][j]]);
                if ((layerCount[1] === 3 || layerCount[2] === 3) && layerCount[0] === 1) {
                    potentialMoves.unshift({
                        layer: layerCount.emptyIndex,
                        row: i,
                        column: j,
                        potentialWinner: layerCount[1] > layerCount[2] ? 1 : 2,
                    });

                    if (potentialMoves[0].potentialWinner === player) {
                        updateSelection(potentialMoves[0]);
                        return true;
                    }
                }
            }
        }

        //Check down each layer diagonally
        for (let i = 0; i < 4; i++) {

            //Top:Row:Left -> Bottom:Row:Right
            let totalCount = getPlayerCount([grid[0][i][0], grid[1][i][1], grid[2][i][2], grid[3][i][3]]);
            if ((totalCount[1] === 3 || totalCount[2] === 3) && totalCount[0] === 1) {
                potentialMoves.unshift({
                    layer: totalCount.emptyIndex,
                    row: i,
                    column: totalCount.emptyIndex,
                    potentialWinner: totalCount[1] > totalCount[2] ? 1 : 2,
                });

                if (potentialMoves[0].potentialWinner === player) {
                    updateSelection(potentialMoves[0]);
                    return true;
                }
            }

            //Top:Row:Right -> Bottom:Row:Left
            totalCount = getPlayerCount([grid[0][i][3], grid[1][i][2], grid[2][i][1], grid[3][i][0]]);
            if ((totalCount[1] === 3 || totalCount[2] === 3) && totalCount[0] === 1) {
                potentialMoves.unshift({
                    layer: totalCount.emptyIndex,
                    row: i,
                    column: totalCount.emptyIndex === 0 ? 3 : totalCount.emptyIndex === 1 ? 2 : totalCount.emptyIndex === 2 ? 1 : 0,
                    potentialWinner: totalCount[1] > totalCount[2] ? 1 : 2,
                });

                if (potentialMoves[0].potentialWinner === player) {
                    updateSelection(potentialMoves[0]);
                    return true;
                }
            }

            //Top:Column:Start -> Bottom:Column:End
            totalCount = getPlayerCount([grid[0][0][i], grid[1][1][i], grid[2][2][i], grid[3][3][i]]);
            if ((totalCount[1] === 3 || totalCount[2] === 3) && totalCount[0] === 1) {
                potentialMoves.unshift({
                    layer: totalCount.emptyIndex,
                    row: totalCount.emptyIndex,
                    column: i,
                    potentialWinner: totalCount[1] > totalCount[2] ? 1 : 2,
                });

                if (potentialMoves[0].potentialWinner === player) {
                    updateSelection(potentialMoves[0]);
                    return true;
                }
            }

            //Top:Column:End -> Bottom:Column:Start
            totalCount = getPlayerCount([grid[0][3][i], grid[1][2][i], grid[2][1][i], grid[3][0][i]]);
            if ((totalCount[1] === 3 || totalCount[2] === 3) && totalCount[0] === 1) {
                potentialMoves.unshift({
                    layer: totalCount.emptyIndex,
                    row: totalCount.emptyIndex === 0 ? 3 : totalCount.emptyIndex === 1 ? 2 : totalCount.emptyIndex === 2 ? 1 : 0,
                    column: i,
                    potentialWinner: totalCount[1] > totalCount[2] ? 1 : 2,
                });

                if (potentialMoves[0].potentialWinner === player) {
                    updateSelection(potentialMoves[0]);
                    return true;
                }
            }
        }


        //Check diagonals in each layer
        for (let i = 0; i < 4; i++) {
            let gridLayer = grid[i];

            //Top:Left -> Bottom:Right
            let totalCount = getPlayerCount([gridLayer[0][0], gridLayer[1][1], gridLayer[2][2], gridLayer[3][3]]);
            if ((totalCount[1] === 3 || totalCount[2] === 3) && totalCount[0] === 1) {
                potentialMoves.unshift({
                    layer: i,
                    row: totalCount.emptyIndex,
                    column: totalCount.emptyIndex,
                    potentialWinner: totalCount[1] > totalCount[2] ? 1 : 2,
                });

                if (potentialMoves[0].potentialWinner === player) {
                    updateSelection(potentialMoves[0]);
                    return true;
                }
            }

            //Top:Right -> Bottom:Left
            totalCount = getPlayerCount([gridLayer[0][3], gridLayer[1][2], gridLayer[2][1], gridLayer[3][0]]);
            if ((totalCount[1] === 3 || totalCount[2] === 3) && totalCount[0] === 1) {
                potentialMoves.unshift({
                    layer: i,
                    row: totalCount.emptyIndex,
                    column: totalCount.emptyIndex === 0 ? 3 : totalCount.emptyIndex === 1 ? 2 : totalCount.emptyIndex === 2 ? 1 : 0,
                    potentialWinner: totalCount[1] > totalCount[2] ? 1 : 2,
                });

                if (potentialMoves[0].potentialWinner === player) {
                    updateSelection(potentialMoves[0]);
                    return true;
                }
            }
        }

        //Check diagonals through layer
        //Top:Top:Left -> Bottom:Bottom:Right
        let totalCount = getPlayerCount([grid[0][0][0], grid[1][1][1], grid[2][2][2], grid[3][3][3]]);
        if ((totalCount[1] === 3 || totalCount[2] === 3) && totalCount[0] === 1) {
            potentialMoves.unshift({
                layer: totalCount.emptyIndex,
                row: totalCount.emptyIndex,
                column: totalCount.emptyIndex,
                potentialWinner: totalCount[1] > totalCount[2] ? 1 : 2,
            });

            if (potentialMoves[0].potentialWinner === player) {
                updateSelection(potentialMoves[0]);
                return true;
            }
        }

        //Top:Bottom:Right -> Bottom:Top:Left
        totalCount = getPlayerCount([grid[0][3][3], grid[1][2][2], grid[2][1][1], grid[3][0][0]]);
        if ((totalCount[1] === 3 || totalCount[2] === 3) && totalCount[0] === 1) {
            potentialMoves.unshift({
                layer: totalCount.emptyIndex,
                row: totalCount.emptyIndex === 0 ? 3 : totalCount.emptyIndex === 1 ? 2 : totalCount.emptyIndex === 2 ? 1 : 0,
                column: totalCount.emptyIndex === 0 ? 3 : totalCount.emptyIndex === 1 ? 2 : totalCount.emptyIndex === 2 ? 1 : 0,
                potentialWinner: totalCount[1] > totalCount[2] ? 1 : 2,
            });

            if (potentialMoves[0].potentialWinner === player) {
                updateSelection(potentialMoves[0]);
                return true;
            }
        }

        //Top:Top:Right -> Bottom:Bottom:Left
        totalCount = getPlayerCount([grid[0][0][3], grid[1][1][2], grid[2][2][1], grid[3][3][0]]);
        if ((totalCount[1] === 3 || totalCount[2] === 3) && totalCount[0] === 1) {
            potentialMoves.unshift({
                layer: totalCount.emptyIndex,
                row: totalCount.emptyIndex,
                column: totalCount.emptyIndex === 0 ? 3 : totalCount.emptyIndex === 1 ? 2 : totalCount.emptyIndex === 2 ? 1 : 0,
                potentialWinner: totalCount[1] > totalCount[2] ? 1 : 2,
            });

            if (potentialMoves[0].potentialWinner === player) {
                updateSelection(potentialMoves[0]);
                return true;
            }
        }

        //Top:Bottom:Left -> Bottom:Top:Right
        totalCount = getPlayerCount([grid[0][3][0], grid[1][2][1], grid[2][1][2], grid[3][0][3]]);
        if ((totalCount[1] === 3 || totalCount[2] === 3) && totalCount[0] === 1) {
            potentialMoves.unshift({
                layer: totalCount.emptyIndex,
                row: totalCount.emptyIndex === 0 ? 3 : totalCount.emptyIndex === 1 ? 2 : totalCount.emptyIndex === 2 ? 1 : 0,
                column: totalCount.emptyIndex,
                potentialWinner: totalCount[1] > totalCount[2] ? 1 : 2,
            });

            if (potentialMoves[0].potentialWinner === player) {
                updateSelection(potentialMoves[0]);
                return true;
            }
        }

        //Check if no potential winning scenarios existed
        if (potentialMoves.length === 0) {
            return false;
        }

        updateSelection(potentialMoves[0]); //Choose first selection to prevent opponent from winning
        return true;
    }

    function getPlayerCount(array) {
        //Counts the occurrences of 0, 1, and 2 within the array, setting emptyIndex to the last occurrence of 0
        return array.reduce((counts, current, index) => {
                if (current === 0) counts.emptyIndex = index;
                counts[current]++;
                return counts;
            }, {0: 0, 1: 0, 2: 0, emptyIndex: -1});
    }

    return {
        playMove,
    };
}

/* harmony default export */ var functions_CPU = (CPU);
;// CONCATENATED MODULE: ./src/assets/functions/Player.js
const Player = (newOverlay) => {
    const overlay = newOverlay;
    const gridLayers = [...overlay.querySelectorAll('.grid-layer')];

    function playMove() {
        return new Promise(resolve => {
            overlay.addEventListener('click', function handleClick(e) {
                let square = e.target.closest('div.grid-layer div'); //Retrieve clicked div
                if (!square || square.querySelector('p')) return; //Check if null or already selected

                let layer = square.closest('div.grid-layer');
                let layerIndex = gridLayers.indexOf(layer);
                let squareIndex = [...layer.children].indexOf(square);

                let row = Math.floor(squareIndex / 4);
                let column = squareIndex % 4;

                overlay.removeEventListener('click', handleClick);
                resolve({layer: layerIndex, row, column}); //Returns selected layer, row, and column
            });
        });
    }

    return {
        playMove,
    };
}

/* harmony default export */ var functions_Player = (Player);
;// CONCATENATED MODULE: ./src/script.js









'use strict';

const TicTacToe = () => {
    const startOverlay = document.querySelector('div.start-game');
    const playOverlay = document.querySelector('div.play-game');
    const playBtn = startOverlay.querySelector('button.play');
    const restartBtn = playOverlay.querySelector('button.restart');

    let grid;
    const gridLayers = [...playOverlay.querySelectorAll('.grid-layer')].map(layer => [...layer.children]); //Creates an array containing all the layers of the grid and their children squares

    let player1, player2;
    let play1Name, play2Name;
    let play1IsCPU, play2IsCPU;

    let statusHeader = playOverlay.querySelector('h1');
    let winner;

    function init() {
        const typeSelectors = startOverlay.querySelectorAll('.player-container .type-selector');
        const playerSVGs = startOverlay.querySelectorAll('.player-container .player-svg');
        const nameInputs = startOverlay.querySelectorAll('.player-container input');

        play2IsCPU = play1IsCPU = false;
        startOverlay.querySelectorAll('button.human').forEach(btn => btn.classList.add('selected'));
        playerSVGs.forEach(svg => svg.src = astronaut_namespaceObject);

        play1Name = 'Player 1';
        play2Name = 'Player 2';
        nameInputs[0].value = play1Name;
        nameInputs[1].value = play2Name;

        //Updates whether each player is a human or cpu
        typeSelectors.forEach((selector, player) => selector.addEventListener('click', (e) => {
            const clickedBtn = e.target.closest('button');
            if (!clickedBtn) return;

            if (player === 0) {
                play1IsCPU = clickedBtn.classList.contains('cpu');
                playerSVGs[0].src = play1IsCPU ? robot_namespaceObject : astronaut_namespaceObject;
            }

            if (player === 1) {
                play2IsCPU = clickedBtn.classList.contains('cpu');
                playerSVGs[1].src = play2IsCPU ? robot_namespaceObject : astronaut_namespaceObject;
            }

            clickedBtn.classList.add('selected');
            clickedBtn.nextElementSibling?.classList.remove('selected')
                || clickedBtn.previousElementSibling?.classList.remove('selected');
        }));

        //Updates name values for each player
        nameInputs.forEach((input, player) => input.addEventListener('change', () => {
            if (!input.value.trim()) input.value = `Player ${player + 1}`;
            if (player === 0) play1Name = input.value;
            if (player === 1) play2Name = input.value;
        }));

        playBtn.addEventListener('click', () => {
            player1 = play1IsCPU ? functions_CPU(grid, 1) : functions_Player(playOverlay);
            player2 = play2IsCPU ? functions_CPU(grid, 2) : functions_Player(playOverlay);
            winner = 0;

            hideElements(startOverlay);
            setTimeout(() => {
                removeElements(startOverlay);
                addElements(playOverlay);
                showElements(playOverlay);
            }, 1000);

            clearGrid();
            playGame(true);
        });

        restartBtn.addEventListener('click', () => {
            hideElements(playOverlay);
            setTimeout(() => {
                removeElements(restartBtn, playOverlay);
                addElements(startOverlay);
                showElements(startOverlay);
            }, 1000);
        });

        removeElements(restartBtn, playOverlay);
        addElements(startOverlay);
        showElements(startOverlay);
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
        playOverlay.classList.add(isPlayer1 ? 'player1' : 'player2');
        playOverlay.classList.remove(isPlayer1 ? 'player2' : 'player1');

        return new Promise(resolve => resolve(isPlayer1 ? player1.playMove(grid) : player2.playMove(grid)))
            .then(({layer, row, column}) => {
                grid[layer][row][column] = isPlayer1 ? 1 : 2;
                gridLayers[layer][row * 4 + column].innerHTML = `<p class="player${isPlayer1 ? '1' : '2'}">${isPlayer1 ? 'X' : 'O'}</p>`;
            });
    }

    function finishGame() {
        if (winner) {
            statusHeader.innerText = `${winner === 1 ? play1Name : play2Name} Wins!`;
        } else {
            statusHeader.innerText = 'Tie Game!';
        }
        addElements(restartBtn);
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
                //Checks if empty square exists in current row
                if (grid[l][r].some(square => square === 0)) 
                    return false;
            }
        }

        return true;
    }

    function isDone() {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {

                //Check rows of each layer
                //Check if a player selected the all 4 squares in the current row
                if (grid[i][j][0] && (grid[i][j][0] == grid[i][j][1]) 
                  && (grid[i][j][0] == grid[i][j][2]) && (grid[i][j][0] == grid[i][j][3])) {
                    winner = grid[i][j][0]; //Updates winner to the player who selected the first square of the row

                    let gridRow = gridLayers[i];
                    gridRow.forEach((square, index) => {
                        if (Math.floor(index / 4) == j) square.classList.add('winner'); //Iterates through each square in the row and adds "winner" class
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

            //Top:Row:Left -> Bottom:Row:Right
            if (grid[0][i][0] && (grid[0][i][0] == grid[1][i][1])
              && (grid[0][i][0] == grid[2][i][2]) && (grid[0][i][0] == grid[3][i][3])) {
                winner = grid[0][i][0];

                gridLayers[0][i * 4 + 0].classList.add('winner');
                gridLayers[1][i * 4 + 1].classList.add('winner');
                gridLayers[2][i * 4 + 2].classList.add('winner');
                gridLayers[3][i * 4 + 3].classList.add('winner');
                return true;
            }

            //Top:Row:Right -> Bottom:Row:Left
            if (grid[0][i][3] && (grid[0][i][3] == grid[1][i][2])
              && (grid[0][i][3] == grid[2][i][1]) && (grid[0][i][3] == grid[3][i][0])) {
                winner = grid[0][i][3];

                gridLayers[0][i * 4 + 3].classList.add('winner');
                gridLayers[1][i * 4 + 2].classList.add('winner');
                gridLayers[2][i * 4 + 1].classList.add('winner');
                gridLayers[3][i * 4 + 0].classList.add('winner');
                return true;
            }

            //Top:Column:Start -> Bottom:Column:End
            if (grid[0][0][i] && (grid[0][0][i] == grid[1][1][i])
              && (grid[0][0][i] == grid[2][2][i]) && (grid[0][0][i] == grid[3][3][i])) {
                winner = grid[0][0][i];

                gridLayers[0][0 * 4 + i].classList.add('winner');
                gridLayers[1][1 * 4 + i].classList.add('winner');
                gridLayers[2][2 * 4 + i].classList.add('winner');
                gridLayers[3][3 * 4 + i].classList.add('winner');
                return true;
            }

            //Top:Column:End -> Bottom:Column:Start
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

            //Top:Left -> Bottom:Right
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

            //Top:Right -> Bottom:Left
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

        //Top:Top:Right -> Bottom:Bottom:Left
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

        return false; //No win occurred
    }

    //Add elements to dom, i.e. display: flex
    function addElements(...elements) {
        elements.forEach(el => {
            el.classList.remove('remove');
            el.classList.add('add');
        });
    }

    //Add elements to dom, i.e. display: none
    function removeElements(...elements) {
        elements.forEach(el => {
            el.classList.remove('add');
            el.classList.add('remove');
        });
    }

    //Scale elements from 0 to 1 using show animation
    function showElements(...elements) {
        elements.forEach(el => {
            el.classList.remove('hide');
            el.classList.add('show');
        });
    }

    //Scale elements from 1 to 0 using hide animation
    function hideElements(...elements) {
        elements.forEach(el => {
            el.classList.remove('show');
            el.classList.add('hide');
        });
    }

    return {
        init,
    };
};

const newGame = TicTacToe();
newGame.init();
}();
/******/ })()
;