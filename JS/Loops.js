// Да се напише програма, която изписва в конзолата сумата на четните числа, които се делят на 3, в интервала [1 - 20] включително.
// очакван отговор: sum = 36

let sum = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    sum += i / 3;
  }
}
console.log(sum);