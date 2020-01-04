// Basic Algorithm Scripting: Slice and Splice
//  Begin inserting elements at index n of the second array.
// The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  
    var newArray = arr2.slice();

for( var i = 0; i < arr1.length; i++) {
        newArray.splice(n, 0, arr1[i]);
        n++;

    }

    return newArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));