// Basic Algorithm Scripting: Falsy Bouncer
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  let finalArray = [];
  // loops through the values of the arr
  for (var values of arr) {
    // push the values into the finalArray
    if (values) {
      finalArray.push(values);
    }
  }
  return finalArray;
}

bouncer([7, "ate", "", false, 9]);
