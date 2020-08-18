// 0 1 2
// 3 4 5
// 6 7 8
//
//
//
//
//
//
//
console.log('Beam me up, Scotty!')

const board = document.getElementById('board');
const boxs = board.querySelectorAll('.box');
const possibleWins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];