function calculateNutrition() {
    let age = document.getElementById('age').value;
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let activity = document.getElementById('activity').value;
    let result = document.getElementById('result');

    if (!age || !weight || !height) {
        result.innerHTML = "<p>Please fill all fields.</p>";
        return;
    }

    let bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    let calories;

    if (activity === 'low') calories = weight * 25;
    else if (activity === 'medium') calories = weight * 30;
    else calories = weight * 35;

    let advice;
    if (bmi < 18.5) advice = "You are underweight. Add more protein and healthy fats.";
    else if (bmi >= 18.5 && bmi <= 24.9) advice = "You have a normal weight. Keep eating balanced meals.";
    else advice = "You are overweight. Try to include more vegetables and reduce sugar intake.";

    result.innerHTML = `<h3>Your BMI: ${bmi}</h3>
                        <p>Daily Calorie Need: ${calories} kcal</p>
                        <p><strong>Advice:</strong> ${advice}</p>`;
}
