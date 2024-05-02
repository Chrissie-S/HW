// <h1>Sum array elements</h1>
// <p>TASK: make sure to understand the example code and write the task given at the end of JS part.</p>


var sum = 0;
for (var i = 1; i <= 10; i++) {
  sum += i;
}
let numbers = [-2, 3, 7, 8, -1, 4, 2];
let x = 0;
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > 0 && numbers[i] % 2 === 0) {
    x += numbers[i];
  }
}
console.log(x);