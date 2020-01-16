// Basic Algorithm Scripting Challenge: Boo Who
// Check if a value is classified as a boolean primitive.
// Return true or false.
// check and see if the parameter is literally true or false
// if so, return true

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (bool === true || bool === false) {
    return true;
  }
  return false;
}

console.log(booWho(1));
