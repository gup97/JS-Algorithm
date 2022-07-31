const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim();
(function name(params) {
    const answer = new Set([...params]);
    for (let i = 1; i < params.length; i++) {
        for (let j = 0; j < params.length - i; j++) {
            answer.add(params.slice(j, j + i + 1));
        }
    }
    console.log(answer.size);
})(input);
