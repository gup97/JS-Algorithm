const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [N, find] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

(function drawSnail(N, find) {
    const snail = Array.from(Array(N), () => Array(N).fill(0));
    let [x, y] = [0, -1];
    const destination = Math.floor(N / 2);
    const direction = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
    ];
    let flag = 0;
    let num = N ** 2;
    while (num !== 0) {
        const nextY = y + direction[flag][0];
        const nextX = x + direction[flag][1];
        if (
            nextX >= N ||
            nextY >= N ||
            nextX < 0 ||
            nextY < 0 ||
            snail[nextY][nextX] !== 0
        ) {
            flag = (flag + 1) % 4;
            continue;
        }
        (y = nextY), (x = nextX);
        snail[y][x] = num--;
    }
    console.log(snail.map((v) => v.join(" ")).join("\n"));

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (snail[i][j] === find) {
                console.log(i + 1, j + 1);
                break;
            }
        }
    }
})(N, find);

