const CPU = (newGrid, newPlayer) => {
    let grid = newGrid;
    const player = newPlayer;

    let layer, row, column;
    let potentialWinner

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
            console.log(layer, row, column);
            while (potentialWinner != player) {
                isAlmostDone();
            }
        } else {
            do {
                layer = Math.floor(Math.random() * 3);
                row = Math.floor(Math.random() * 3);
                column = Math.floor(Math.random() * 3);
            } while (grid[layer][row][column]);
        }

        return {layer, row, column};
    }

    function isAlmostDone() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {

                let rowCount = getPlayerCount(grid[i][j]);
                if ((rowCount[1] === 2 || rowCount[2] === 2) && rowCount[0] === 1) {
                    layer = i, row = j, column = rowCount.emptyIndex;
                    potentialWinner = Math.max(rowCount[1], rowCount[2]);
                    return true;
                }

                let columnCount = getPlayerCount([grid[i][0][j], grid[i][1][j], grid[i][2][j]]);
                if ((columnCount[1] === 2 || columnCount[2] === 2) && columnCount[0] === 1) {
                    layer = i, row = columnCount.emptyIndex, column = j;
                    potentialWinner = Math.max(columnCount[1], columnCount[2]);
                    return true;
                }

                let layerCount = getPlayerCount([grid[0][i][j], grid[1][i][j], grid[2][i][j]]);
                if ((layerCount[1] === 2 || layerCount[2] === 2) && layerCount[0] === 1) {
                    layer = layerCount.emptyIndex, row = i, column = j;
                    potentialWinner = Math.max(layerCount[1], layerCount[2]);
                    return true;
                }
            }
        }

        for (let i = 0; i < 3; i++) {
            let totalCount = getPlayerCount([grid[0][i][0], grid[1][i][1], grid[2][i][2]]);
            if ((totalCount[1] === 2 || totalCount[2] === 2) && totalCount[0] === 1) {
                layer = totalCount.emptyIndex;
                row = i;
                column = totalCount.emptyIndex;
                potentialWinner = Math.max(totalCount[1], totalCount[2]);
                return true;
            }

            totalCount = getPlayerCount([grid[0][i][2], grid[1][i][1], grid[2][i][0]]);
            if ((totalCount[1] === 2 || totalCount[2] === 2) && totalCount[0] === 1) {
                layer = totalCount.emptyIndex;
                row = i;
                column = layer === 0 ? 2 : layer === 2 ? 0 : 1;
                potentialWinner = Math.max(totalCount[1], totalCount[2]);
                return true;
            }

            totalCount = getPlayerCount([grid[0][0][i], grid[1][1][i], grid[2][2][i]]);
            if ((totalCount[1] === 2 || totalCount[2] === 2) && totalCount[0] === 1) {
                layer = totalCount.emptyIndex;
                row = totalCount.emptyIndex;
                column = i;
                potentialWinner = Math.max(totalCount[1], totalCount[2]);
                return true;
            }

            totalCount = getPlayerCount([grid[0][2][i], grid[1][1][i], grid[2][0][i]]);
            if ((totalCount[1] === 2 || totalCount[2] === 2) && totalCount[0] === 1) {
                layer = totalCount.emptyIndex;
                row = layer === 0 ? 2 : layer === 2 ? 0 : 1;
                column = i;
                potentialWinner = Math.max(totalCount[1], totalCount[2]);
                return true;
            }
        }

        for (let i = 0; i < 3; i++) {
            let gridLayer = grid[i];

            let totalCount = getPlayerCount([gridLayer[0][0], gridLayer[1][1], gridLayer[2][2]]);
            if ((totalCount[1] === 2 || totalCount[2] === 2) && totalCount[0] === 1) {
                layer = i, row = totalCount.emptyIndex, column = totalCount.emptyIndex;
                potentialWinner = Math.max(totalCount[1], totalCount[2]);
                return true;
            }

            totalCount = getPlayerCount([gridLayer[0][2], gridLayer[1][1], gridLayer[2][0]]);
            if ((totalCount[1] === 2 || totalCount[2] === 2) && totalCount[0] === 1) {
                layer = i;
                row = totalCount.emptyIndex;
                column = row === 0 ? 2 : row === 2 ? 0 : 1;
                potentialWinner = Math.max(totalCount[1], totalCount[2]);

                return true;
            }
        }

        let totalCount = getPlayerCount([grid[0][0][0], grid[1][1][1], grid[2][2][2]]);
        if ((totalCount[1] === 2 || totalCount[2] === 2) && totalCount[0] === 1) {
            layer = row = column = totalCount.emptyIndex;
            potentialWinner = Math.max(totalCount[1], totalCount[2]);
            return true;
        }

        totalCount = getPlayerCount([grid[0][2][2], grid[1][1][1], grid[2][0][0]]);
        if ((totalCount[1] === 2 || totalCount[2] === 2) && totalCount[0] === 1) {
            layer = totalCount.emptyIndex;
            row = layer === 0 ? 2 : layer === 2 ? 0 : 1;
            column = row;
            potentialWinner = Math.max(totalCount[1], totalCount[2]);
            return true;
        }

        totalCount = getPlayerCount([grid[0][0][2], grid[1][1][1], grid[2][2][0]]);
        if ((totalCount[1] === 2 || totalCount[2] === 2) && totalCount[0] === 1) {
            layer = totalCount.emptyIndex;
            row = totalCount.emptyIndex;
            column = row === 0 ? 2 : row === 2 ? 0 : 1;
            potentialWinner = Math.max(totalCount[1], totalCount[2]);
            return true;
        }
    
        totalCount = getPlayerCount([grid[0][2][0], grid[1][1][1], grid[2][0][2]]);
        if ((totalCount[1] === 2 || totalCount[2] === 2) && totalCount[0] === 1) {
            layer = totalCount.emptyIndex;
            row = layer === 0 ? 2 : layer === 2 ? 0 : 1;
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