import Player from './Player.js';

'use strict';

const TicTacToe = () => {
    const startOverlay = document.querySelector('div.start-game');
    const playOverlay = document.querySelector('div.play-game');

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
    const gridLayers = [...playOverlay.querySelectorAll('.grid-layer')];

    let play1IsCPU, play2IsCPU;
    let difficulty;

    let play1Name, play2Name;

    let player1, player2;

    function init() {
        const play1Select = startOverlay.querySelector('.player-container:first-child .type-selector');
        const play2Select = startOverlay.querySelector('.player-container:last-child .type-selector');
        const play1SVG = document.querySelector('svg.user1 g use');
        const play2SVG = document.querySelector('svg.user2 g use');

        const diffSelect = startOverlay.querySelector('.difficulty-selector');

        const playBtn = startOverlay.querySelector('button.play');

        const play1Input = startOverlay.querySelector('.player-container:first-child input');
        const play2Input = startOverlay.querySelector('.player-container:last-child input');

        play2IsCPU = play1IsCPU = false;
        startOverlay.querySelectorAll('button.human').forEach(btn => btn.classList.add('selected'));
        [play1SVG, play2SVG].forEach(svg => svg.setAttribute('xlink:href', '#astronaut'));

        difficulty = 1;
        diffSelect.querySelector('button.easy').classList.add('selected');
        diffSelect.classList.add('hidden');

        play1Name = 'Player 1';
        play2Name = 'Player 2';
        play1Input.value = play1Name;
        play2Input.value = play2Name;

        play1Select.addEventListener('click', (e) => {
            const clickedBtn = e.target.closest('button')
            if (!clickedBtn) return;

            play1IsCPU = clickedBtn.classList.contains('cpu');

            play1SVG.setAttribute('xlink:href', play1IsCPU ? '#machine' : '#astronaut');
            clickedBtn.classList.add('selected');
            clickedBtn.nextElementSibling?.classList.remove('selected')
                || clickedBtn.previousElementSibling?.classList.remove('selected');

            let [human, cpu] = play2Select.querySelectorAll('button');
            if (play1IsCPU) cpu.click();
            play1IsCPU ? hideElements(human) : showElements(human);
        });

        play2Select.addEventListener('click', (e) => {
            const clickedBtn = e.target.closest('button')
            if (!clickedBtn) return;

            play2IsCPU = clickedBtn.classList.contains('cpu');

            play2SVG.setAttribute('xlink:href', play2IsCPU ? '#machine' : '#astronaut');
            clickedBtn.classList.add('selected');
            clickedBtn.nextElementSibling?.classList.remove('selected')
                || clickedBtn.previousElementSibling?.classList.remove('selected');

            play2IsCPU ? showElements(diffSelect) : hideElements(diffSelect);
        });

        diffSelect.addEventListener('click', (e) => {
            const clickedButton = e.target.closest('button');
            if (!clickedButton) return;

            difficulty = clickedButton.classList.contains('easy') ? 0 : clickedButton.classList.contains('hard') ? 1 : clickedButton.classList.contains('impossible') ? 2 : difficulty;

            diffSelect.querySelectorAll('button').forEach(btn => btn == clickedButton ? btn.classList.add('selected') : btn.classList.remove('selected'));
        });

        play1Input.addEventListener('blur', () => {
            if (!play1Input.value.trim()) play1Input.value = 'Player 1';
            play1Name = play1Input.value;
        });

        play2Input.addEventListener('blur', () => {
            if (!play2Input.value.trim()) play1Input.value = 'Player 2';
            play2Name = play2Input.value;
        });

        playBtn.addEventListener('click', () => {
            console.log(play1Name, play2Name, play1IsCPU, play2IsCPU, difficulty);
            hideElements(startOverlay);
            showElements(playOverlay);

            player1 = Player();
            player2 = Player();
    
            player1.init(playOverlay);
            player2.init(playOverlay);

            playGame(true);
        });
    }

    function playGame(isPlayer1) {
        playMove(isPlayer1).then(() => {
            console.log('done turn');
        });
    }

    function playMove(isPlayer1) {
        return new Promise(resolve => resolve(isPlayer1 ? player1.playMove() : player2.playMove()))
            .then(({square, layerIndex: layer, row, column}) => {
                grid[layer][row][column] = isPlayer1 ? 1 : 2;
                square.innerHTML = `<p>${isPlayer1 ? 'X' : 'O'}</p>`;

                console.log(square, layer, row, column);
            });
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