function checkYuGiOh(n) {
    let checkArray = [1, "yu", "gi", "oh"]
    let arrWithNums = [];
    for (i = 1; i < n; i++) {
     arrWithNums.push(Math.floor(Math.random() * 10));
    }
    return arrWithNums;
} 
console.log(checkYuGiOh(10))