export const bmi = (weight, heigth) => {
    const bmiValue = weight / (heigth * heigth);
    if (bmiValue <= 18.5) {
        return 'Underweight';
    }
    if (bmiValue <= 25.0) {
        return 'Normal';
    }
    if (bmiValue <= 30.0) {
        return 'Overweight';
    }
    return 'Obese';
};
console.log(bmi(80, 1.80));
