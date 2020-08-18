// 0 1 2
// 3 4 5
// 6 7 8
//
//1. vars
//2. loop for clicks to determine box and player
//3. check possible wins
//4. log winner
//5. reset box for another round
//
console.log('Beam me up, Scotty!')

const board = document.getElementById('board');
const boxs = board.querySelectorAll('.box');
const boxsArray = Array.from(boxs);
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
const players = ['x', 'o'];

let currentPossition = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 0;
let cp = players[currentPlayer];
let turnsTaken = 0;

let start = () => {
  for (let i = 0; i < boxsArray.length; i++) {
    const box = boxsArray[i];
    box.addEventListener('click', (e) => {
      const isClicked = e.target.classList.contains('x') || e.target.classList.contains('o');
      if (!isClicked) {
        currentMove(e.target, i);
        changePlayer();
      }
    });
  }
}

let currentMove = (self, i) => {
  self.classList.add(cp);
  currentPossition[i] = cp;
  turnsTaken++;
}

let changePlayer = () => {
  currentPlayer = 1 - currentPlayer;
  cp = players[currentPlayer];
}

start()