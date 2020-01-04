// Basic Algorithm Scripting: Chunk Monkey
// Write a function that splits an array (first argument) 
// into groups the length of size (second argument) and returns them as a two-dimensional array.
// stores the final result
// used to store the sub-arrays that will be pushed to res


function chunkArrayInGroups(arr, size) {
    // Break it up.
    
    var res = []; 
    var temp = []; 
   
    for (var i in arr) {
    
      if (temp.length === size) { 
          res.push(temp); 
          temp = []; 
      }
      
      temp.push(arr[i]); 
    }
    res.push(temp); 
   
    return res;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2); 