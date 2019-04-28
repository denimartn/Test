// Source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-11.php

function celsiusToFareneith(celsius) {
    const fareneith = (celsius * 9) / 5 + 32;
    return `${celsius}°C is ${fareneith}°F`;
}

function fareneithToCelsius(fareneith) {
    const celsius = ((fareneith - 32) * 5) / 9;
    return `${fareneith}°F is ${celsius}°C`;
}
