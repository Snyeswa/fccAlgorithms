// Basic Algorithm Scripting: Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  // create a array that will host result of the sub array
  let largestNumber = [0, 0, 0, 0];

  // create a for-loop that will iterate through arr
  for (var i = 0; i < arr.length; i++) {
    // create a second for loop that will iterate through the subd array
    for (var j = 0; j < arr[i].length; j++) {
      //create a if statement that compares both variable and return the higher one
      if (arr[i][j] > largestNumber[i]) {
        largestNumber[i] = arr[i][j];
      }
    }
  }

  return largestNumber;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);
