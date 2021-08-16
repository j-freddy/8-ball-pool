function tick(game) {
  game.update();
  game.draw();

  window.requestAnimationFrame(() => { tick(game); });
}

window.onload = () => {
  console.log("Hello world!");
  console.log("To-do:");
  console.log("Refactor magic numbers in table.js");
  console.log("Refactor game.js: move cuePower to cue object,\
               make table body object");

  const game = new Game();
  tick(game);
}
