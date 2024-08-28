function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('inputTemperature').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let result;

    if (isNaN(inputTemp)) {
        document.getElementById('result').innerText = "Please enter a valid number.";
        return;
    }

    if (inputUnit === outputUnit) {
        result = inputTemp;
    } else {
        // Convert input temperature to Celsius first
        let tempInCelsius;
        switch (inputUnit) {
            case 'Celsius':
                tempInCelsius = inputTemp;
                break;
            case 'Fahrenheit':
                tempInCelsius = (inputTemp - 32) * (5 / 9);
                break;
            case 'Kelvin':
                tempInCelsius = inputTemp - 273.15;
                break;
        }

        // Convert from Celsius to the desired output unit
        switch (outputUnit) {
            case 'Celsius':
                result = tempInCelsius;
                break;
            case 'Fahrenheit':
                result = (tempInCelsius * (9 / 5)) + 32;
                break;
            case 'Kelvin':
                result = tempInCelsius + 273.15;
                break;
        }
    }

    document.getElementById('result').innerText = `Result: ${result.toFixed(2)} ${outputUnit}`;
}
