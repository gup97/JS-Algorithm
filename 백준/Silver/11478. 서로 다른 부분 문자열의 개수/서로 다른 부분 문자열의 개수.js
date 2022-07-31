const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("");
(function name(params) {
    const result = {};
    for (let i = 0; i < params.length; i++) {
        let str = "";
        for (let j = i; j < params.length; j++) {
            str += params[j];
            result[str] = true;
        }
    }
    console.log(Object.keys(result).length);
})(input);
