// Source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-46.php

function multipleOrNot(n1, n2) {
    if (n1 < 0 || n2 < 0) {
        return false;
    }

    function isMultiple(num) {
        return num % 7 === 0 || num % 11 === 0;
    }

    const isN1 = isMultiple(n1); 
    const isN2 = isMultiple(n2); 

    return Boolean(isN1 ^ isN2);
}
