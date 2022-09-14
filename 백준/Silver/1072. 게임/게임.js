const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [N, M] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

function rate(n, m) {
    return Math.floor((m * 100) / n);
}

function sol(N, M) {
    const originalRating = rate(N, M);
    let head = 0;
    let tail = N;
    let result = 0;

    while (head <= tail) {
        result = Math.floor((tail + head) / 2);
        const rating = rate(N + result, M + result);

        if (rating > originalRating) {
            tail = result - 1;
        } else {
            head = result + 1;
        }
        // console.log(head, tail, result, originalRating, rating);
    }
    return head;
}
const result = sol(N, M);
console.log(result > N ? -1 : result);
