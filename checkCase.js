// Source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-98.php

function checkCase(str) {
    let upper = '';
    let lower = '';
    for(let i = 0; i < str.length; i++) {
        let curr = str[i]; 
        if(curr === curr.toUpperCase()) {
            upper += curr; 
        } else {
            lower += curr; 
        }
    }

    if(upper.length > lower.length) {
        return str.toUpperCase(); 
    } 
    
    return str.toLowerCase();        
}