// Basic Algorithm Scripting: Mutation
// Return true if the statement in first element of array
// we need to lowercase the two array
// we need to loop the second array
// setup a var take the number by the method indexOf();
// If we get -1 then we don't have the letter both side.
function mutation(arr) {
  var item1 = arr[0].toLowerCase();
  var item2 = arr[1].toLowerCase();
  for (var i = 0; i < item2.length; i++) {
    var match = item1.indexOf(item2[i]);
    if (match === -1) {
      return false;
    }
  }

  return true;
}

mutation(["hello", "hey"]);
