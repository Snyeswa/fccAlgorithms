// Basic Algorithm Scripting Challenge : Finders Keepers
// Create a function that looks through an array (first argument)
//Returns the first element in the array that passes a truth test (second argument).
// If no element passes the test, return undefined.

function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) {return num % 2 === 0;}));
