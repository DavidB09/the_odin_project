
class TicTacToe {

	constructor() {
		this.rulesContainer = document.querySelector('.main-rules'); 
		this.scoreContainer = document.querySelector('.main-score'); 
		this.weaponContainer = document.querySelector('.main-weapons'); 
		this.playerContainer = document.querySelector('.main-player'); 
		this.finalScoreContainer = document.querySelector('.main-final'); 
		this.messageContainer = document.querySelector('.main-message');

		let [button1, button2] = Array.from(document.querySelectorAll('.main-button')); 
 		this.button1 = button1; 
 		this.button2 = button2; 

 		let [katana, kusarigama, shuriken] = Array.from(document.querySelectorAll('.main-player ul li img')); 
 		this.katana = katana; 
 		this.kusarigama = kusarigama; 
 		this.shuriken = shuriken; 

		this.button1.onclick = this.playGame.bind(this); 
		this.button2.onclick = this.initializeGame.bind(this); 
		this.katana.onclick = this.playMove.bind(this, 0);  
		this.kusarigama.onclick = this.playMove.bind(this, 1); 
		this.shuriken.onclick = this.playMove.bind(this, 2); 

		this.initializeGame(); 
	}

	initializeGame() {
		this.finalResult = ''; 
 		this.currentUserWeapon = -1; 
 		this.currentCPUWeapon = -1; 
 		this.currentUserScore = 0; 
 		this.currentCPUScore = 0; 

 		this.updateScoreUI(); 

		this.removeHidden(this.rulesContainer, this.button1); 
		this.addHidden(
			this.scoreContainer, 
			this.weaponContainer, 
			this.playerContainer, 
			this.finalScoreContainer, 
			this.messageContainer, 
			this.button2
		); 
	}

	playGame() {		
		this.removeHidden(this.scoreContainer, this.weaponContainer, this.playerContainer); 
		this.addHidden(this.rulesContainer, this.button1); 
	}

	playMove(weapon) {
		this.currentCPUWeapon = this.determineCPUChoice(); 
		this.currentUserWeapon = weapon; 

		if (this.currentUserWeapon === this.currentCPUWeapon) {
			this.updateScoreUI(); 
			return; 
		}

		if (this.currentUserWeapon === 0 && this.currentCPUWeapon === 1) this.currentUserScore += 1; 
		if (this.currentUserWeapon === 1 && this.currentCPUWeapon === 2) this.currentUserScore += 1; 
		if (this.currentUserWeapon === 2 && this.currentCPUWeapon === 0) this.currentUserScore += 1; 

		if (this.currentCPUWeapon === 0 && this.currentUserWeapon === 1) this.currentCPUScore += 1; 
		if (this.currentCPUWeapon === 1 && this.currentUserWeapon === 2) this.currentCPUScore += 1; 
		if (this.currentCPUWeapon === 2 && this.currentUserWeapon === 0) this.currentCPUScore += 1; 

		this.updateScoreUI(); 

		if (this.currentCPUScore === 5 || this.currentUserScore === 5) {
			this.finalResult = this.currentUserScore === 5 ? 'win' : 'lose'; 
			this.finishGame(); 
		}
	}

	determineCPUChoice() {
		return Math.floor(Math.random() * 3); 
	}

	finishGame() {
		this.removeHidden(this.finalScoreContainer, this.messageContainer, this.button2); 
		this.addHidden(this.scoreContainer, this.weaponContainer, this.playerContainer); 

		const [finalUserScore, finalCPUScore] = Array.from(this.finalScoreContainer.querySelectorAll('p')); 
		finalUserScore.innerText = this.currentUserScore; 
		finalCPUScore.innerText = this.currentCPUScore; 

		document.querySelector(`.${this.finalResult}-message`).classList.remove('hidden'); 
		document.querySelector(`.${this.finalResult !== 'win' ? 'win' : 'lose'}-message`).classList.add('hidden'); 
	}

	updateScoreUI() {
		const [userScore, cpuScore] = Array.from(this.scoreContainer.querySelectorAll('p')); 
		userScore.innerText = this.currentUserScore; 
		cpuScore.innerText = this.currentCPUScore; 

		this.weaponContainer.querySelectorAll('img').forEach(image => image.parentNode.removeChild(image)); 
		let cpuWeapon; 
		let userWeapon

		if (this.currentCPUWeapon === -1) return; 

		if (this.currentCPUWeapon === 0)
			cpuWeapon = this.katana.cloneNode(false); 
		if (this.currentUserWeapon === 0)
			userWeapon = this.katana.cloneNode(false);

		if (this.currentCPUWeapon === 1)
			cpuWeapon = this.kusarigama.cloneNode(false); 
		if (this.currentUserWeapon === 1)
			userWeapon = this.kusarigama.cloneNode(false);

		if (this.currentCPUWeapon === 2)
			cpuWeapon = this.shuriken.cloneNode(false); 
		if (this.currentUserWeapon === 2)
			userWeapon = this.shuriken.cloneNode(false);


		this.weaponContainer
			.querySelectorAll('.flex-column')
			.forEach((container, i) => container.append(i == 0 ? userWeapon : cpuWeapon)); 
	}

	removeHidden(...elements) {
		elements.forEach(elem => elem.classList.remove('hidden')); 
	}

	addHidden(...elements) {
		elements.forEach(elem => elem.classList.add('hidden')); 
	}
}

const game = new TicTacToe(); 