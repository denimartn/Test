// Source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-54.php 

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
