const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

window.onload = () => {
	console.log("Hello world!");

	ctx.fillRect(100, 50, 80, 50);
}
