// 149. Write a JavaScript program to change the capitalization of all letters in a given string. 

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

console.log(trasforming('w3resource'));
console.log(trasforming('Germany'));
console.log(trasforming('hello'));

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

console.log(trasforming('w3resource'));
console.log(trasforming('Germany'));
console.log(trasforming('hello'));