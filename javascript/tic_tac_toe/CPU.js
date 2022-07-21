const CPU = (newGrid, newPlayer) => {
    let grid = newGrid;
    const player = newPlayer;

    let layer, row, column;
    let potentialWinner;

    function playMove(newGrid) {
        grid = newGrid;

        return new Promise(resolve => {
            setTimeout(() => {
                resolve(findMove());
            }, 1000);
        });
    }

    function findMove() {
        if (isAlmostDone()) {
            for (let turn = 0; turn < 3; turn++) {
                if (potentialWinner == player) break;
                isAlmostDone();
            }
        } else {
            do {
                layer = Math.floor(Math.random() * 4);
                row = Math.floor(Math.random() * 4);
                column = Math.floor(Math.random() * 4);
            } while (grid[layer][row][column]);
        }

        return {layer, row, column};
    }

    function isAlmostDone() {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                let rowCount = getPlayerCount(grid[i][j]);
                if ((rowCount[1] === 3 || rowCount[2] === 3) && rowCount[0] === 1) {
                    layer = i, row = j, column = rowCount.emptyIndex;
                    potentialWinner = Math.max(rowCount[1], rowCount[2]);
                    return true;
                }

                let columnCount = getPlayerCount([grid[i][0][j], grid[i][1][j], grid[i][2][j], grid[i][3][j]]);
                if ((columnCount[1] === 3 || columnCount[2] === 3) && columnCount[0] === 1) {
                    layer = i, row = columnCount.emptyIndex, column = j;
                    potentialWinner = Math.max(columnCount[1], columnCount[2]);
                    return true;
                }

                let layerCount = getPlayerCount([grid[0][i][j], grid[1][i][j], grid[2][i][j], grid[3][i][j]]);
                if ((layerCount[1] === 3 || layerCount[2] === 3) && layerCount[0] === 1) {
                    layer = layerCount.emptyIndex, row = i, column = j;
                    potentialWinner = Math.max(layerCount[1], layerCount[2]);
                    return true;
                }
            }
        }

        for (let i = 0; i < 4; i++) {
            let totalCount = getPlayerCount([grid[0][i][0], grid[1][i][1], grid[2][i][2], grid[3][i][3]]);
            if ((totalCount[1] === 3 || totalCount[2] === 3) && totalCount[0] === 1) {
                layer = totalCount.emptyIndex;
                row = i;
                column = totalCount.emptyIndex;
                potentialWinner = Math.max(totalCount[1], totalCount[2]);
                return true;
            }

            totalCount = getPlayerCount([grid[0][i][3], grid[1][i][2], grid[2][i][1], grid[3][i][0]]);
            if ((totalCount[1] === 3 || totalCount[2] === 3) && totalCount[0] === 1) {
                layer = totalCount.emptyIndex;
                row = i;
                column = layer === 0 ? 3 : layer === 1 ? 2 : layer === 2 ? 1 : 0;
                potentialWinner = Math.max(totalCount[1], totalCount[2]);
                return true;
            }

            totalCount = getPlayerCount([grid[0][0][i], grid[1][1][i], grid[2][2][i], grid[3][3][i]]);
            if ((totalCount[1] === 3 || totalCount[2] === 3) && totalCount[0] === 1) {
                layer = totalCount.emptyIndex;
                row = totalCount.emptyIndex;
                column = i;
                potentialWinner = Math.max(totalCount[1], totalCount[2]);
                return true;
            }

            totalCount = getPlayerCount([grid[0][3][i], grid[1][2][i], grid[2][1][i], grid[3][0][i]]);
            if ((totalCount[1] === 3 || totalCount[2] === 3) && totalCount[0] === 1) {
                layer = totalCount.emptyIndex;
                row = layer === 0 ? 3 : layer === 1 ? 2 : layer === 2 ? 1 : 0;
                column = i;
                potentialWinner = Math.max(totalCount[1], totalCount[2]);
                return true;
            }
        }

        for (let i = 0; i < 4; i++) {
            let gridLayer = grid[i];

            let totalCount = getPlayerCount([gridLayer[0][0], gridLayer[1][1], gridLayer[2][2], gridLayer[3][3]]);
            if ((totalCount[1] === 3 || totalCount[2] === 3) && totalCount[0] === 1) {
                layer = i, row = totalCount.emptyIndex, column = totalCount.emptyIndex;
                potentialWinner = Math.max(totalCount[1], totalCount[2]);
                return true;
            }

            totalCount = getPlayerCount([gridLayer[0][3], gridLayer[1][2], gridLayer[2][1], gridLayer[3][0]]);
            if ((totalCount[1] === 3 || totalCount[2] === 3) && totalCount[0] === 1) {
                layer = i;
                row = totalCount.emptyIndex;
                column = row === 0 ? 3 : row === 1 ? 2 : row === 2 ? 1 : 0;
                potentialWinner = Math.max(totalCount[1], totalCount[2]);
                return true;
            }
        }

        let totalCount = getPlayerCount([grid[0][0][0], grid[1][1][1], grid[2][2][2], grid[3][3][3]]);
        if ((totalCount[1] === 3 || totalCount[2] === 3) && totalCount[0] === 1) {
            layer = row = column = totalCount.emptyIndex;
            potentialWinner = Math.max(totalCount[1], totalCount[2]);
            return true;
        }

        totalCount = getPlayerCount([grid[0][3][3], grid[1][2][2], grid[2][1][1], grid[3][0][0]]);
        if ((totalCount[1] === 3 || totalCount[2] === 3) && totalCount[0] === 1) {
            layer = totalCount.emptyIndex;
            row = layer === 0 ? 3 : layer === 1 ? 2 : layer === 2 ? 1 : 0;
            column = row;
            potentialWinner = Math.max(totalCount[1], totalCount[2]);
            return true;
        }

        totalCount = getPlayerCount([grid[0][0][3], grid[1][1][2], grid[2][2][1], grid[3][3][0]]);
        if ((totalCount[1] === 3 || totalCount[2] === 3) && totalCount[0] === 1) {
            layer = totalCount.emptyIndex;
            row = totalCount.emptyIndex;
            column = row === 0 ? 3 : row === 1 ? 2 : row === 2 ? 1 : 0;
            potentialWinner = Math.max(totalCount[1], totalCount[2]);
            return true;
        }
    
        totalCount = getPlayerCount([grid[0][3][0], grid[1][2][1], grid[2][1][2], grid[3][0][3]]);
        if ((totalCount[1] === 3 || totalCount[2] === 3) && totalCount[0] === 1) {
            layer = totalCount.emptyIndex;
            row = layer === 0 ? 3 : layer === 1 ? 2 : layer === 2 ? 1 : 0;
            column = totalCount.emptyIndex;
            potentialWinner = Math.max(totalCount[1], totalCount[2]);
            return true;
        }

        return false;
    }

    function getPlayerCount(array) {
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