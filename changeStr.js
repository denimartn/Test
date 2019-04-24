// Source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-62.php

function changeStr(str) {
    if(str.length < 3) {
        return str;
    }
    
    const lastPart = str.substr(-3);
    const firstPart = str.slice(0, str.length - 3);

    return lastPart + firstPart;
}

