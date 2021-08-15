const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

function tick(game) {
	game.update();
	game.draw();

	window.requestAnimationFrame(() => { tick(game); });
}

window.onload = () => {
	console.log("Hello world!");
	console.log("To-do:");
	console.log("Make table class");
	console.log("Make wall class and have ball bounce on walls");

	const game = new Game();
	tick(game);
}
