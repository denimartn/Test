// 95. Write a JavaScript program to replace all the numbers with a specified number of a given array of integers.

function substitute(arr, n1, n2) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === n1) {
            arr[i] = n2;
        }
    }
    return arr;

}

console.log(substitute([1,2,3,4,5,8], 2, 4))
console.log(substitute([1, 2, 3, 2, 2, 8, 1, 9], 2, 5))
console.log(substitute([1,2,5,62,94,10,100], 100, 9999))
