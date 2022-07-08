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
  console.log(sum)
  return sum
}
sumOfNumbers([1,2,3,4,5,6,7,8,9,10])

// assignment.sumOfNumbers = sumOfNumbers;

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
}
  console.log("The even numbers here are: " + evenNumber + " and their total number is " + evenNumber.length)
return evenNumber;
}
countEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// assignment.countEvenNumbers = countEvenNumbers;

/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(arrayOfNumbers) {
    return arrayOfNumbers;
}
// assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

