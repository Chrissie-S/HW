let students = ["Ivan", "Pesho", "Maria"];
let scores = [5, 4, 6];

// TASK: дефинирайте функция 'getHighestScoreIndex()', която да връща индекса на най-големият елемент от масива scores.

// ---> YOUR CODE HERE <---
function getHighestScoreIndex(scores) {
    let highestScoreIndex = 0; 
    let highestScore = scores[0]; 
    for (let i = 1; i < scores.length; i++) {
      if (scores[i] > highestScore) {
        highestScoreIndex = i;
        highestScore = scores[i];
      }
    }
    return highestScoreIndex;
  }
// TASK: като използвате функцията getHighestScoreIndex() изпишета в конзолата името на студента с най-висока оценка:

// ---> YOUR CODE HERE <---
let highestScoreIndex = getHighestScoreIndex(scores);
console.log(`${students[highestScoreIndex]} has the highest score: ${scores[highestScoreIndex]}`);

// expected output
// Maria has the higest score: 6





