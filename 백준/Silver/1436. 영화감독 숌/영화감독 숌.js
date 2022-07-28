const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = +fs.readFileSync(filePath).toString().trim();

(function name(n) {
    let movie = ["666"];
    function addMovie(movie) {
        movie.forEach((element) => {
            for (let i = 0; i < 10; i++) {
                movie.push(element + i);
                movie.push(i + element);
            }
        });
        return [...new Set(movie)];
    }
    while (true) {
        movie = addMovie(movie);
        const result = [...new Set(movie.map(Number))].sort((a, b) => a - b);
        if (result.length > input) {
            console.log(result[input - 1]);
            break;
        }
    }
})(input);
