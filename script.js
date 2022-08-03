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
	})
}