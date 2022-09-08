const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const list = input.map((v) => v.replace("\r", ""));
const convertList = list.map((str) => {
    let level = 65;
    let arr = [];
    const splitedStr = str.split("");

    for (let i = 0; i < splitedStr.length; i++) {
        const target = splitedStr[i];
        if (arr[target] === undefined) {
            arr[target] = true;
            str = str.replaceAll(target, String.fromCharCode(level++));
        }
    }
    return str;
});

let result = 0;
for (let i = 0; i < convertList.length; i++) {
    for (let j = i + 1; j < convertList.length; j++) {
        if (convertList[i] === convertList[j]) result++;
    }
}
console.log(result);
