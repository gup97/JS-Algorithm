const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split(/\n/);
const [N, M] = input.splice(0, 1).toString().split(" ").map(Number);
const arr = input.map((el) => el.replace("\r", ""));
const WB = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const BW = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];
const cutChessBoard = (arr, x, y) => {
  const board = [];
  for (let i = x; i < x + 8; i++) {
    board.push(arr[i].slice(y, y + 8));
  }
  return board;
};
const countRePaint = (board, chessBoard) => {
  return board.reduce((count, row, idx) => {
    return count + countDifferent(row, chessBoard[idx]);
  }, 0);
};
const countDifferent = (word, targetWord) => {
  word = word.split("");
  targetWord = targetWord.split("");
  return word.reduce(
    (count, letter, idx) => (letter !== targetWord[idx] ? count + 1 : count),
    0
  );
};

let min = Infinity;
for (let i = 0; i < N - 7; i++) {
  for (let j = 0; j < M - 7; j++) {
    const board = cutChessBoard(arr, i, j);
    const compare = Math.min(countRePaint(board, WB), countRePaint(board, BW));
    min = Math.min(compare, min);
  }
}
console.log(min);
