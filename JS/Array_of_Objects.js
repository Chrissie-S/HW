// масив от обекти представящи данни за различни марки бири:
const beers = [
    {name: "Ариана", color: "светло", prices:[1.3, 2, 2.4], town: "София"},
    {name: "Ариана", color: "тъмно", prices:[1.4, 2.2, 2.8], town: "София"},
    {name: "Каменица", color: "светло", prices:[1.5, 2.5, 3], town: "Пловдив"},
    {name: "Загорка", color: "светло", prices:[2, 3, 3.6], town: "Стара Загора"},
  ];
  console.log("The beers array: ", beers);
    
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // ПРИМЕР: изписване на имената и цвета на всички бири:
  for (let i = 0, len = beers.length; i < len; i++) {
    const beer = beers[i];
    
    console.log(`${beer.name} - ${beer.color}`);
  }
  
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // ЗАДАЧА: намиране на най-евтината бира по 3-та цена:
  // да се изпише в конзолата името, цвета и цената на най-евтината бира, като използваме за сравнението 3-тата цена в масива prices:
    
  // очакван изход:
  // "Ариана, светло" - 2.4
  
let cheapestBeer = null;
let cheapestPrice = Infinity;

for (let i = 0; i < beers.length; i++) {
  const beer = beers[i];
  const thirdPrice = beer.prices[2];
  if (thirdPrice < cheapestPrice) {
    cheapestPrice = thirdPrice;
    cheapestBeer = beer;
  }
}
if (cheapestBeer !== null) {
  console.log(`"${cheapestBeer.name}, ${cheapestBeer.color}" - ${cheapestPrice}`);
}