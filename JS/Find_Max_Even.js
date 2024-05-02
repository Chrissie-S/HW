// TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.
// ---> YOUR CODE HERE <---

function findMaxEven(numbers) {
    let maxEven = null;
    for (let num of numbers) {
      if (num % 2 === 0) {
        if (maxEven === null || num > maxEven) {
          maxEven = num;
        }
      }
    }
    return maxEven;
  }
// TEST
let numbers = [2, -4, 5, 3, 9, 0, 1];
let max = findMaxEven(numbers);
console.log(`The max of ${numbers} is ${max}`);