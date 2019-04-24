// Source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-96.php

function abs(arr) {
    let result = 0;
    for(let i = 0; i < arr.length - 1; i++) {
        result += Math.abs(arr[i] - arr[i + 1]) 
    }
    return result;
}
















