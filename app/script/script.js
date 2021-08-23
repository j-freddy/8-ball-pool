function tick(game) {
  game.update();
  game.draw();

  window.requestAnimationFrame(() => { tick(game); });
}

window.onload = () => {
  console.log("Hello world!");
  console.log("To-do:");
  console.log("Refactor game.js: move cuePower to cue object");
  console.log("2 players: take turns hitting after all balls are still")

  const game = new Game();
  tick(game);
}
