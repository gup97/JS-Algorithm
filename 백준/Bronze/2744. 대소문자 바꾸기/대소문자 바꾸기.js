const { SlowBuffer } = require("buffer");
const fs = require("fs");
const { stringify } = require("querystring");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim();
function sol(str) {
    let temp = "";
    str.split("").forEach((v) => {
        const code = v.charCodeAt();
        if (65 <= code && code <= 90) {
            temp += v.toLowerCase();
        } else {
            temp += v.toUpperCase();
        }
    });
    return temp;
}
console.log(sol(input));
