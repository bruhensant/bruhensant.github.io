function emoji() {

	let emojiContainer = document.getElementById("emoji");

	emojiContainer.style.opacity = 1;

	const emojis = [
		"./src/emoji/emoji-alien.png",
		"./src/emoji/emoji-bat.png",
		"./src/emoji/emoji-default.png",
		"./src/emoji/emoji-lhama.png",
		"./src/emoji/emoji-monkey.png",
		"./src/emoji/emoji-moon.png",
		"./src/emoji/emoji-octo.png",
		"./src/emoji/emoji-poop.png",
		"./src/emoji/emoji-robot.png",
		"./src/emoji/emoji-snowperson.png",
		"./src/emoji/emoji-sun.png",
		"./src/emoji/emoji-thinking.png",
	];

	let randomEmoji = Math.floor(Math.random() * emojis.length);

	emojiContainer.src = emojis[randomEmoji];
	emojiContainer.style.marginBottom = '-3%';
}

function cursor() {
	const cursor = document.querySelector('.cursor');
	document.addEventListener('mousemove', (e) => {
		cursor.style.left = e.clientX + 'px';
		cursor.style.top = e.clientY + 'px';
	});

}
function hover() {
	const cursor = document.querySelector('.cursor').style;

	cursor.opacity = '0.5';
	cursor.transform = 'scale(3)';
}

function leave() {
	const cursor = document.querySelector('.cursor');

	cursor.innerHTML = ' ';
	cursor.style.transform = 'scale(1)';
	cursor.style.opacity = '0.8';
	cursor.style.backgroundColor = '#581C87';
}

function activate() {
	const cursor = document.querySelector('.cursor').style;

	cursor.transform = 'scale(2)';
}

function handshake() {

	const cursor = document.querySelector('.cursor');

	cursor.style.transform = 'scale(2)';
	cursor.style.opacity = '1';
	cursor.innerHTML = '👋';
	cursor.style.fontSize = '8px';
}

function recruiter() {
	const cursor = document.querySelector('.cursor');

	cursor.style.transform = 'scale(3)';
	cursor.style.backgroundColor = '#D8B4FE';
	cursor.style.opacity = '1';
	cursor.innerHTML = '👨‍🚀';
	cursor.style.fontSize = '7px';
}

function designeer() {
	const cursor = document.querySelector('.cursor');

	cursor.style.transform = 'scale(3)';
	cursor.style.backgroundColor = '#D8B4FE';
	cursor.style.opacity = '1';
	cursor.innerHTML = '👀';
	cursor.style.fontSize = '7px';
}