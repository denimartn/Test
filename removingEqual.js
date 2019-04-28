// Source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-135.php\

function removingEqual(str) {
    let result = '';
    for(let i = 0; i < str.length; i++) {
        const curr = str[i];
        if(str.indexOf(curr) === str.lastIndexOf(curr)) {
            result += curr;
        }
    }
    return result;
}
