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
  console.log("Fix bug: ball gets stuck inside wall");
  console.log("Fix: Push ball until it no longer touches wall");
  console.log("Spend time refactoring");

  const game = new Game();
  tick(game);
}