const fs = require("fs");
const filePath = "/dev/stdin" ;
// 제출시       
const input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);

function solution(chess = []) {
  let white = 0;
  let whiteTrigger = true;
  for (let i = 0; i < 8; i++) {
    whiteTrigger = !whiteTrigger;
    for (let j = 0; j < 8; j++) {
      whiteTrigger = !whiteTrigger;
      if (whiteTrigger && chess[i][j] === "F") {
        white++;
      }
    }
  }
  console.log(white);
}
