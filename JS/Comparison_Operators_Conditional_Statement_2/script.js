function greetings() {
  var userTown = document.getElementById("town").value;
  console.log(userTown);
  if (userTown === "София") {
    console.log("Здравей!");
  } else if (userTown === "Париж") {
    console.log("Salut!");
  } else if (userTown === "Лондон") {
    console.log("Hi!");
  } else {
    console.log("Не сте въвели град");
  }
}