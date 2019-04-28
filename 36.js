// Source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-36.php

function checkLastDigit(n1, n2, n3) {
    if (n1 < 0 || n2 < 0 || n3 < 0) {
        return false;
    }
    return n1 % 10 === n2 % 10 && n2 % 10 === n3 % 10;
}
