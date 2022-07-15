// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================

/**
 * Challenge - 1
 */
function sumOfNumbers(arrayOfNumbers) {
   sum = 0  
  for (i = 0; i < arrayOfNumbers.length; i++){
    sum += arrayOfNumbers[i]
  }
  return sum
}
sumOfNumbers([1,2,3,4,5,6,7,8,9,10])

assignment.sumOfNumbers = sumOfNumbers;

/**
 * Challenge - 2
 * 
 */

function countEvenNumbers(arrayOfNumbers) {
let evenNumber = [];
for(i = 0; i < arrayOfNumbers.length; i++) {
  if(arrayOfNumbers[i] % 2 == 0) {
    evenNumber.push(arrayOfNumbers[i]);
    console.log(arrayOfNumbers[i])
  }
  // return evenNumber
}
  console.log("The even numbers here are: " + evenNumber + " and their total number is " + evenNumber.length)
return evenNumber;
}
countEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// assignment.countEvenNumbers = countEvenNumbers;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

