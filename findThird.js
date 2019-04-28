// Source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-111.php

function findThird(x, y, z) {
    if(x !== y && x !== z && y !== z) {
        return null;
    } 
    
    if(x === y) {
        return z;
    }

    if(x === z) {
        return y;
    }

    return x;
}