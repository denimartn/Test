// Source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-95.php

function substitute(arr, n1, n2) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === n1) {
            arr[i] = n2;
        }
    }
    return arr;

}
