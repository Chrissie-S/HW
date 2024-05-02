// TASK: Да се дефинира функция SumEven2DimArrayElements(), която връща сумата от четните елементи на подаденият й двумерен масив.
// ---> YOUR CODE HERE <---

function SumEven2DimArrayElements(arr) {
    let sum = 0;
    for (let row of arr) {
      for (let num of row) {
        if (num % 2 === 0) {
          sum += num;
        }
      }
    }
    return sum;
  }
// TEST:
let arr = [
    [1,2,3],
    [4,5,6]
  ];
  let sum = SumEven2DimArrayElements(arr);
  console.log(sum);
  
  // expected output: 12
  
  