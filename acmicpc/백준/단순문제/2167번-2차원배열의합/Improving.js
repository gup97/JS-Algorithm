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
  const prefix = new Array(N + 1).fill(0).map(() => new Array(M + 1).fill(0));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      prefix[i + 1][j + 1] =
        matrix[i][j] + prefix[i + 1][j] + prefix[i][j + 1] - prefix[i][j];
    }
  }
  rowK.forEach((pos) => {
    const [r1, c1] = [pos[0], pos[1]];
    const [r2, c2] = [pos[2], pos[3]];
    console.log(
      prefix[r2][c2] - prefix[r2][c1 - 1] - prefix[r1 - 1][c2] + prefix[r1 - 1][c1 - 1]
    );
  });
}
