function register(event) {
    event.preventDefault();
    const height = Number(document.getElementById("height").value)
    console.log(height)
    const weight = Number(document.getElementById("weight").value)
    console.log(weight)
    const result = document.getElementById("bmiX");
    if (weight <= 0 || height <= 0) {
        document.getElementById("bmiX").classList.add("text-red-500");
        result.textContent = "Please enter valid positive values.";
        document.getElementById("BMI").textContent = "";
        return;
    }
    result.textContent = "";
    const BMI = weight / (height * height);
    document.getElementById("BMI").classList.remove(
        "text-yellow-500",
        "text-green-500",
        "text-red-300",
        "text-red-500"
    );
    if (BMI <= 18.5) {
        document.getElementById("BMI").classList.add("text-yellow-500");
        document.getElementById("BMI").textContent = "Underweight BMI : " + BMI.toFixed(2);
    }
    else if (BMI <= 25) {
        document.getElementById("BMI").classList.add("text-green-500");
        document.getElementById("BMI").textContent = "Normal BMI : " + BMI.toFixed(2);
    }
    else if (BMI <= 30) {
        document.getElementById("BMI").classList.add("text-red-300");
        document.getElementById("BMI").textContent = "Overweight BMI : " + BMI.toFixed(2);
    }
    else {
        document.getElementById("BMI").classList.add("text-red-500");
        document.getElementById("BMI").textContent = "Obese BMI : " + BMI.toFixed(2);
    }
}