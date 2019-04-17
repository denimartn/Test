// 36. Write a JavaScript program to check if the last digit of the three given positive integers is same.
function checkLastDigit(n1, n2, n3) {
    if (n1 < 0 || n2 < 0 || n3 < 0) {
        return false;
    }
    return n1 % 10 === n2 % 10 && n2 % 10 === n3 % 10;
}

checkLastDigit(20, 30, 400);
