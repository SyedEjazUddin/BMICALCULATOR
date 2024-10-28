function bmi() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var eja = parseFloat(document.getElementById("eja").value);

    
    var id = document.querySelector("h3")
    if (isNaN(height) || isNaN(weight) || isNaN(eja)) {
        id.textContent = "Enter accurate value!";
        return; // Exit the function if there's an error
    }
    else if(height <= 0 || weight <= 0|| eja <= 0){
        id.textContent = "Enter you value"
    }
    var BMI = weight / Math.pow(height, 2);

    // Round BMI to 2 decimal places for better readability
    BMI = BMI.toFixed(2);

    // Set BMI result in the input field
    id.textContent = `your BMI value is ${BMI}`

}
bmi()