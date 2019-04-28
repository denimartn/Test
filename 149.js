// Source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-149.php

// # with for loop

function trasforming(str) {
    let result = '';
    for(let i = 0; i < str.length; i++) {
        const curr = str[i];
        if(curr !== curr.toLowerCase()) {
            result += curr.toLowerCase();
        } else{
            result += curr.toUpperCase();
        }
    }
    return result;
}

// with map

function trasforming(str) {
    let result = '';
    const myStr = str.split('').map((item) => {
        if(item !== item.toLowerCase()) {
            result += item.toLowerCase();
        } else {
            result += item.toUpperCase();
        }
    }).join('');

    return result;
}

