function calculateBMI(weightKg, heightM) {
    const bmi = weightKg / (heightM * heightM);
    return bmi;
}
const height = 1.80; 
const weight = 75;
const bmiResult = calculateBMI(weight, height);
console.log("Индекс на телесната маса (BMI): " + bmiResult.toFixed(2));