// Source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-50.php

// # FOR LOOP
function changeCase(str) {
    const arr = str.split(' ');
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        const firstToUpper = arr[i].charAt(0).toUpperCase()
        const restOf = arr[i].substring(1);
        result.push(firstToUpper + restOf);
    }

    return result.join(' ');
}

// # MAP
function changeCase(str) {
    return str.split(' ').map(item => {
       return item.charAt(0).toUpperCase() + item.substring(1); 
    }).join(' ');
}