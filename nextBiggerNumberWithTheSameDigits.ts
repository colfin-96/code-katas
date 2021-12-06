const number = 614;

const sortedArray = number
  .toString()
  .split('')
  .map((x) => {
    return parseInt(x, 10);
  })
  .sort((a, b) => {
    return a > b ? -1 : a < b ? 1 : 0;
  });

let result = 0;
sortedArray.forEach((x, i) => {
  const negativeIndex = sortedArray.length - i - 1;
  result += Math.pow(10, negativeIndex) * x;
});

if (result > number) {
  console.log(result);
} else if (result <= number) {
  console.log(null);
}
