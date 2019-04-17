// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  Go to the editor
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output:
// 60°C is 140 °F
// 45°F is 7.222222222222222°C
function celsiusToFareneith(celsius) {
    const fareneith = (celsius * 9) / 5 + 32;
    return `${celsius}°C is ${fareneith}°F`;
}

function fareneithToCelsius(fareneith) {
    const celsius = ((fareneith - 32) * 5) / 9;
    return `${fareneith}°F is ${celsius}°C`;
}

console.log(celsiusToFareneith(60));
console.log(fareneithToCelsius(45));
