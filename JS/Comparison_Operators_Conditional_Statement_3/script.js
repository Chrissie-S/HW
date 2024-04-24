function checkUserAge() {
  var inputsValues = getInputsValues();
  var userBirthYear = inputsValues.uBirth.year;
  var userName = inputsValues.uname;
  console.log(userBirthYear);
  console.log(typeof userBirthYear);
  console.log(userName);
  let userAge = 2022 - userBirthYear;
  let x = 18 - userAge;
  if (userAge >= 18) {
    console.log(`Добре дошли, ${userName}!`);
  } else if (userAge >= 12 && userAge < 18) {
    console.log(
      `${userName}, ще имате достъп само до определена функционалност от този сайт.`
    );
  } else {
    console.log(`Съжaлявам ${userName}, отбий се тук след ${x} години!`);
  }
}

// ***
writeToOutput("Попълнете формата и кликнете върху бутона!");
function getInputsValues() {
  var form = document.getElementsByClassName("test")[0];
  var inputs = form.getElementsByTagName("input");
  var inputsValues = {};
  for (var i = 0, len = inputs.length; i < len; i++) {
    var inputNode = inputs[i];
    var inputNodeValue = inputNode.value;
    if (inputNode.type === "date") {
      var dateMatch = inputNodeValue.match(/^(\d{4})-(\d{2})-(\d{2})$/); //YYYY-MM-DD
      if (dateMatch) {
        inputNodeValue = {
          year: dateMatch[1],
          month: dateMatch[2],
          day: dateMatch[3],
        };
      }
    } else {
      inputNodeValue = inputNode.value;
    }
    inputsValues[inputNode.id] = inputNodeValue;
  }
  return inputsValues;
}
function writeToOutput(result) {
  var outputNode = document.getElementById("output");
  outputNode.innerHTML = result;
}