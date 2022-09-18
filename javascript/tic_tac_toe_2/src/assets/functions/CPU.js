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

export default CPU;