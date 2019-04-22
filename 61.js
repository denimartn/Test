// Write a JavaScript program to concatenate two strings except their first character. 

function concStr(str1, str2) {
    return str1.substring(1) + str2.substring(1);
}

console.log(concStr("PHP","JS"));
console.log(concStr("A","B"));
console.log(concStr("AA","BB"));
console.log(concStr('hello', 'world'))