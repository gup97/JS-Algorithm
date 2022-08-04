const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = input.shift();

for (let i = 0; i < T; i++) {
    const [x1, y1, x2, y2] = input.shift().split(" ").map(Number);
    const n = input.shift();
    const CIRCLE = input.splice(0, n).map((v) => v.split(" ").map(Number));
    const result = CIRCLE.reduce((acc, circle) => {
        acc += isInCircle(x1, y1, circle) && !isInCircle(x2, y2, circle) ? 1 : 0;
        acc += !isInCircle(x1, y1, circle) && isInCircle(x2, y2, circle) ? 1 : 0;
        return acc;
    }, 0);
    console.log(result);

    function isInCircle(x, y, circle) {
        const [cx, cy, r] = circle;
        const distance = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
        return distance > r ? false : true;
    }
}
