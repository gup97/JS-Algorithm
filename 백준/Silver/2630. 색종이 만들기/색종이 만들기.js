const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

sol();
function sol() {
    const paper = input.map((v) => v.replace("\r", "").split(" ").map(Number));
    let result = { white: 0, blue: 0 };
    act(0, 0, N);

    function act(w, h, N) {
        const stand = check(w, h, N);
        if (stand === "white") {
            result.white++;
        } else if (stand === "blue") {
            result.blue++;
        } else {
            act(w, h, N / 2);
            act(w + N / 2, h, N / 2);
            act(w, h + N / 2, N / 2);
            act(w + N / 2, h + N / 2, N / 2);
        }
    }
    console.log(result.white);
    console.log(result.blue);
    function check(w, h, r) {
        let flag = paper[w][h];
        for (let i = w; i < w + r; i++) {
            for (let j = h; j < h + r; j++) {
                if (paper[i][j] !== flag) return false;
            }
        }
        return flag === 1 ? "blue" : "white";
    }
}
