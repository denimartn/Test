// Source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-126.php

// with for loop
function findMax(arr) {
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        if(curr % 2 === 0) {
            newArr.push(curr);
        }
    }
    return Math.max(...newArr);
}

// with filter and reduce
function findMax(arr) {
    return arr.filter(num => num % 2 === 0).reduce((acc, curr) => Math.max(acc, curr));
}
