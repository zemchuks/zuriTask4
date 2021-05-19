const checkYuGiOh = function (n) {

    //creates empty array
  let arrayval = [];

  //checks if the argument is a number
  if (typeof n != 'number') {
    console.log(`invalid paremeter: ${n}`);
  } 
  //if its a number then
  else if (typeof n == 'number') {
      //starts at 1 loops through n (number we passed in) and adds it to the arrayval
    for (let i = 1; i <= n; i++) {
        //pushes the value at i to the array
      arrayval.push(i);

      //loops through our created array
      for (let j = 0; j < arrayval.length; j++) {
        if (arrayval[j] % 2 == 0 && arrayval[j] % 3 == 0) {
          arrayval[j] = 'yu-gi';
        }
         else if (arrayval[j] % 2 == 0 && arrayval[j] % 5 == 0) {
          arrayval[j] = 'yu-oh';
        }
         else if ( arrayval[j] % 2 == 0 && arrayval[j] % 3 == 0 &&
          arrayval[j] % 5 == 0
        ) {
          arrayval[j] = 'yu-ji-oh';
        } else if (arrayval[j] % 2 == 0) {
          arrayval[j] = 'yu';
        } else if (arrayval[j] % 3 == 0) {
          arrayval[j] = 'gi';
        } else if (arrayval[j] % 5 == 0) {
          arrayval[j] = 'oh';
        }
      }
    }
  }
  return arrayval;
};

console.log(checkYuGiOh(10));
console.log(checkYuGiOh(5))
console.log(checkYuGiOh("fizzbuzz is meh"))