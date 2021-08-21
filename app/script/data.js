const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

const data = {
  game: {
    scale: canvas.height / 450
  },
  ball: {
    radius: 13.5,
    friction: 0.99, // friction coefficient, 1 = smooth, 0 = sticky
    minSpeed: 0.1,
    objectBallsInitialPos: [
      [505.5, 225],
      [529.5, 211.5], [529.5, 238.5],
      [553.5, 198], [553.5, 225], [553.5, 252],
      [577.5, 184.5], [577.5, 211.5], [577.5, 238.5], [577.5, 265.5],
      [601.5, 171], [601.5, 198], [601.5, 225], [601.5, 252], [601.5, 279]
    ],
    numSolidBalls: 7,
    numStripedBalls: 7,
    eightBallIndex: 4
  },
  cueBall: {
    initialPos: [186.75, 225],
    colour: "#f7f7ff"
  },
  solidBall: {
    colour: "#577399"
  },
  stripedBall: {
    colour: "#fe5f55"
  },
  eightBall: {
    colour: "#000"
  },
  wall: {
    properties: [
      // [bounceDirection, x, y, width, height]
      ["RIGHT", 27, 60, 6, 330],
      ["DOWN", 60, 27, 262, 6],
      ["DOWN", 365, 27, 262, 6],
      ["LEFT", 654, 60, 6, 330],
      ["UP", 60, 417, 262, 6],
      ["UP", 365, 417, 262, 6]
    ],
    colour: "#577399"
  },
  hole: {
    radius: 18,
    positions: [
      [30, 30], [343.5, 30], [657, 30], [30, 420], [343.5, 420], [657, 420]
    ],
    colour: "#000"
  }
}
