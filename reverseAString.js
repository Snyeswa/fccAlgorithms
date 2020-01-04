// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.
// I used a decerementy for-loop to run through the string received and each chareacter o another variable in reserve OverconstrainedError.

function reverseString(str) {
    let result = "";
    for(let i = str.length-1; i >= 0; i--){
      result += str[i]
    }
    return result;
  }
  console.log(reverseString("hello"));
  
  