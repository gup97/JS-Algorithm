const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const [T, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.replace("\r", "").split(" ").map(Number));

for (let i = 0; i < T; i++) {
  const [M, N, K] = input.shift();
  const cabbage = input.splice(0, K);
  let worm = 0;
  let farm = Array.from(Array(N), () => Array(M).fill(0));
  cabbage.forEach(([x, y]) => {
    farm[y][x] = 1;
  });

  const bfs = (startX, startY) => {
    const queue = [[startX, startY]];
    while (queue.length > 0) {
      const [x, y] = queue.shift();
      if (farm[y][x] === 0) continue;
      else farm[y][x] = 0;
      if (0 <= x - 1) queue.push([x - 1, y]);
      if (0 <= y - 1) queue.push([x, y - 1]);
      if (x + 1 < M) queue.push([x + 1, y]);
      if (y + 1 < N) queue.push([x, y + 1]);
    }
  };
  cabbage.forEach(([x, y]) => {
    if (farm[y][x] === 1) {
      bfs(x, y);
      worm++;
    }
  });
  console.log(worm);
}
// const farmArray = input.
