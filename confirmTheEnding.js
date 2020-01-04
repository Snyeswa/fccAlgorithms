// Basic Algorithm Scripting: Confirm The Ending
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."

  // create a variable for comparing the end of string;
  var start = str.length - target.length;
  if (str.substr(start, str.length) == target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");
