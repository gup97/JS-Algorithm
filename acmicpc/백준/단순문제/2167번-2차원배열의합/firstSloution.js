const fs = require("fs");
const filePath = `${__dirname}/input.txt`;
// 제출시       "/dev/stdin" ;
const input = fs.readFileSync(filePath).toString().trim().split(/\n/);
const [N, M] = input.splice(0, 1)[0].split(" ").map(Number);
const matrix = input.splice(0, N).map((row) => row.split(" ").map(Number));
const K = Number(input.splice(0, 1)[0]);
const rowK = input.map((row) => row.split(" ").map(Number));

solution(N, M, matrix, rowK);

function solution(N, M, matrix, rowK) {
  rowK.forEach((row) => {
    let sum = 0;
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= M; j++) {
        if (row[0] <= i && row[1] <= j && i <= row[2] && row[3] >= j) {
          sum += matrix[i - 1][j - 1];
        }
      }
    }
    console.log(sum);
  });
}
