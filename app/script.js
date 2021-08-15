const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

function tick(game) {
	game.update();
	game.draw();

	window.requestAnimationFrame(() => { tick(game); });
}

window.onload = () => {
	console.log("Hello world!");

	const game = new Game();
	tick(game);
}
