// 20. Write a JavaScript program to check from two given integers, if one is positive and one is negative.
function posAndNeg(n1, n2) {
    return (n1 > 0 && n2 < 0) || (n1 < 0 && n2 > 0);
}

posAndNeg(1, -5);
