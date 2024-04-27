function calculateBMI() {
    let heightInMeters = prompt("Въведете вашата височина в метри:", "1.75");
    let weightInKilos = prompt("Въведете вашето тегло в килограми:", "70");
    const bmi = weightInKilos / (heightInMeters * heightInMeters);
    console.log(`Вашият BMI е: ${bmi}`);
  }
  calculateBMI();