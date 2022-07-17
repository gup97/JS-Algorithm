const arr = new Array(10000 + 1).fill(true);
result = "";
for (let i = 1; i <= 10001; i++) {
  if (arr[i]) result += `${i}\n`;
  for (let j = i; j <= 10001; ) {
    j =
      j +
      j
        .toString()
        .split("")
        .map(Number)
        .reduce((a, b) => a + b);
    arr[j] = false;
  }
}
console.log(result);
