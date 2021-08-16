const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

const data = {
  game: {
    scale: canvas.height / 450
  },
  ball: {
    radius: 13.5,
    friction: 0.985, // friction coefficient, 1 = smooth, 0 = sticky
    minSpeed: 0.1
  },
  cueBall: {
    colour: "#f7f7ff"
  },
  solidBall: {
    colour: "#577399"
  },
  stripedBall: {
    colour: "#fe5f55"
  },
  wall: {
    colour: "#577399"
  }
}
