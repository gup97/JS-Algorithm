const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [KN, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const [K, N] = KN.split(" ").map(Number);
const LEN = input.map(Number);

function cutLen(N, LEN) {
    let sum = 0;
    LEN.forEach((e) => {
        sum += Math.floor(e / N);
    });
    return sum;
}

const binarySearch = (LEN, target, left, right) => {
    let result = 0;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (cutLen(mid, LEN) < target) {
            right = mid - 1;
        } else {
            result = mid;
            left = mid + 1;
        }
    }
    return result;
};
const result = binarySearch(LEN, N, 0, 10e9);
console.log(result);
