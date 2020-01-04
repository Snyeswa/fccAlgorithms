// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// Create a variable that equal declear it to 1.
// create a for-loop thar initilize the parameter, and decrement that viariable.
// let the variable created multiply and equal to the initilized variable from the for-loop.
// Return the created variable.

function factorialize(num) {
  let num1 = 1;
  for (var i = num; i > 0; i--) {
    num1 *= i;
  }
  return num1;
}

factorialize(5);
