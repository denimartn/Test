// 96. Write a JavaScript program to compute the sum of absolute differences of consecutive numbers of a given array of integers.


function abs(arr) {
    let result = 0;
    for(let i = 0; i < arr.length - 1; i++) {
        result += Math.abs(arr[i] - arr[i + 1]) 
    }
    return result;
}

abs([5,-10,3,-2])















