// The quick brown fox jumped over the lazy dog
/// define the problem: findthe longest word
/// split the sentence into an array
/// initialize  a longest word variable of type int (0)
/// initialize a longest word variable of type  string ("");
///loop through the array
/// compare the length of each word
// count the letter of the currently word (using.length)
// speak in term of art
// store the length in a variable
// var str = "The quick brown fox jumped over the lazy dog";
// var strArray = str.split(" ");
// var longestWorldLength = 0;
// var longestWord = "";
// for (var i = 0; i < strArray.length; i++) {
//     if(strArray[i].length > longestWorldLength){
//         longestWorldLength = strArray[i].length;
//         longestWord = strArray[i];

function findLongestWord(arr) {
  var arrArray = arr.split(" ");
  var longestWordLength = 0;
  var longestWord = "";
  for (var i = 0; i < arrArray.length; i++) {
    if (arrArray[i].length > longestWordLength) {
      longestWordLength = arrArray[i].length;
      longestWord = arrArray[i];
    }
  }
  return longestWordLength;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
