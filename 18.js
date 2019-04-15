

// 18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50. 
function checking(n1, n2) {
  if(n1 + n2 === 50 || n1 === 50 || n2 === 50) {
    return true;
  } else {
    return false;
  }
}

checking(50, 5)