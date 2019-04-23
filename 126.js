// 126. Write a JavaScript program to get the largest even number from an array of integers. 

// with for loop
function findMax(arr) {
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        if(curr % 2 === 0) {
            newArr.push(curr);
        }
    }
    return Math.max(...newArr);
}

console.log(findMax([1,20,5,48,400]))
console.log(findMax([20, 40, 200]))
console.log(findMax([20, 40, 200, 301]))

// with filter and reduce

function findMax(arr) {
    return arr.filter(num => num % 2 === 0).reduce((acc, curr) => Math.max(acc, curr));
}

console.log(findMax([1,20,5,48,400]))
console.log(findMax([20, 40, 200]))
console.log(findMax([20, 40, 200, 301]))
