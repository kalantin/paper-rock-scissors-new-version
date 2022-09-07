const img = document.querySelectorAll('img');
const win = document.querySelector('.win');
const lose = document.querySelector('.lose');
const draw = document.querySelector('.draw');
const pc = document.querySelector('.pc');
const your = document.querySelector('.your');
const option = ['scissors', 'rock', 'paper'];
const info = document.querySelector('.info');
let winning = 0;
let losing = 0;
let drawing = 0;
const game = (e) => {
	const random = Math.floor(Math.random() * img.length);
	const pcChoice = option[random];
	const player = e.target.getAttribute('alt');
	pc.textContent = pcChoice;
	if (
		(player === 'scissors' && pcChoice === 'paper') ||
		(player === 'rock' && pcChoice === 'scissors') ||
		(player === 'paper' && pcChoice === 'rock')
	) {
		info.textContent = 'You win!';
		winning++;
		win.textContent = winning;
	} else if (player === pcChoice) {
		info.textContent = 'You draw!';
		drawing++;
		draw.textContent = drawing;
	} else {
		info.textContent = 'You lose!';
		losing++;
		lose.textContent = losing;
	}
};

const choice = (e) => {
	img.forEach((el) => {
		el.classList.remove('selected');
	});
	e.target.classList.add('selected');
	info.textContent = 'Wait AI thinks...';
	your.textContent = e.target.getAttribute('alt')
	setTimeout(() => {
		game(e);
	}, 3000);
};

img.forEach((el) => {
	el.addEventListener('click', choice);
});
