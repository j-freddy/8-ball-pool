const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

window.onload = () => {
	console.log("Hello world!");

	ctx.save();
	ctx.fillStyle = "#bdd5ea"
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.restore();

	const solidBall = new SolidBall(new Vector(200, 400));
	const stripedBall = new StripedBall(new Vector(100, 300));
	const cueBall = new CueBall(new Vector(280, 250));
	solidBall.draw();
	stripedBall.draw();
	cueBall.draw();
}
