const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim();

const msg = "I'm Sorry Hansoo";
const map = new Map();
input.split("").forEach((v) => {
    map.set(v, map.get(v) + 1 || 1);
});

let flag = 0;
let center = "";
let str = "";
for (let [k, m] of map) {
    if (m % 2 === 1) {
        flag++;
        center = k;
    }
    str += k.repeat(Math.floor(m / 2));
}

const sortStr = str.split("").sort((a, b) => {
    return a > b ? 1 : -1;
});
const head = sortStr.join("");
const tail = sortStr.reverse().join("");
let result = head + center + tail;
flag <= 1 ? console.log(result) : console.log(msg);
