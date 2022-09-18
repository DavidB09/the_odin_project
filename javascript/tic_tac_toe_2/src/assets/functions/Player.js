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

export default Player;