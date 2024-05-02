// TASK: Да се дефинира функция, която приема 2 масива и връща масив, чиито елементи са сумата от елементите на двата масива (елемент по елемент).
function sumArrays(array1, array2) {
    if (array1.length !== array2.length) {
      throw new Error("Arrays must have the same length");
    }
    let sumArray = [];
    for (let i = 0; i < array1.length; i++) {
      sumArray.push(array1[i] + array2[i]);
    }
    return sumArray;
  }
  // TEST:
  console.log(sumArrays([1, 2, 3], [4, 5, 6]));
  // OUTPUT:
  // [ 5, 7, 9 ]