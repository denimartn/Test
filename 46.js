// Write a JavaScript program to check two given non-negative integers and if one of the number (not both) is multiple of 7 or 11.
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

console.log(multipleOrNot(14, 21));
console.log(multipleOrNot(14, 20));
console.log(multipleOrNot(16, 20));
