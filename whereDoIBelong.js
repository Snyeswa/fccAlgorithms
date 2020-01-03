// Basic Algorithm Scripting: Where Do I Belong

function getIndexToIns(arr, num) {
  // Return the lowest index at which a value (second arr) should be inserted into array (fist argument) once it has been sorted. The returned value should be a Number.
  // use a foor loops to find the immediate large  value's postion.
  // Find my place in this sorted array.
  arr.sort((a, b) => {
    return a - b;
  });
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
}

getIndexToIns([40, 60], 50);
