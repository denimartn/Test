// 54. Write a JavaScript program to count the number of vowels in a given string.  
function checkVowels(str) {
    const vowels = ['a', 'e', 'i','o','u'];
    let counter = 0;
    for(let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i])) {
            counter ++;
        }
    }
    return counter;
}

console.log(checkVowels('hello'))
