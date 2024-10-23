export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 20;

export const SHAPES = [
  // I
  [[1, 1, 1, 1]],
  // O
  [
    [1, 1],
    [1, 1],
  ],
  // T
  [
    [0, 1, 0],
    [1, 1, 1],
  ],
  // L
  [
    [1, 0],
    [1, 0],
    [1, 1],
  ],
  // J
  [
    [0, 1],
    [0, 1],
    [1, 1],
  ],
  // S
  [
    [0, 1, 1],
    [1, 1, 0],
  ],
  // Z
  [
    [1, 1, 0],
    [0, 1, 1],
  ],
];

export const COLORS = [
  '#00f0f0', // cyan
  '#f0f000', // yellow
  '#a000f0', // purple
  '#f0a000', // orange
  '#0000f0', // blue
  '#00f000', // green
  '#f00000', // red
];

export const INITIAL_STATE = {
  board: Array(BOARD_HEIGHT).fill(Array(BOARD_WIDTH).fill(0)),
  currentPiece: {
    shape: SHAPES[0],
    position: { x: 0, y: 0 },
    type: 0
  },
  nextPiece: {
    shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
    type: Math.floor(Math.random() * SHAPES.length)
  },
  score: 0,
  level: 1,
  lines: 0,
  gameOver: false,
  started: false,
  paused: false,
  movePiece: (direction: number) => {},
  dropPiece: () => {},
  hardDrop: () => {},
  rotatePiece: (direction: number) => {},
};