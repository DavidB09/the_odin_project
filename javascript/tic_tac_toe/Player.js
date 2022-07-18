const Player = () => {
    let overlay;
    let gridLayers;

    function init(newOverlay) {
        overlay = newOverlay;
        gridLayers = [...overlay.querySelectorAll('.grid-layer')];
    }

    function playMove() {
        return new Promise(resolve => {
            overlay.addEventListener('click', function handleClick(e) {
                let square = e.target.closest('div.grid-layer div');
                if (!square || square.querySelector('p')) return;

                let layer = square.closest('div.grid-layer');
                let layerIndex = gridLayers.indexOf(layer);
                let squareIndex = [...layer.children].indexOf(square);

                let row = Math.floor(squareIndex / 3);
                let column = squareIndex % 3;

                overlay.removeEventListener('click', handleClick);
                resolve({square, layerIndex, row, column});
            });
        });
    }

    return {
        init, playMove
    };
}

export default Player;