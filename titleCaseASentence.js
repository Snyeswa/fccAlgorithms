// Basic Algorithm Scripting: Title Case a Sentence
// Return the provided string with the first letter of each word capitalized.
// Make sure rest of the word is in lower case.
// For the purpose of this exercise, you should capitalize connecting words like "the and of"

function titleCase(str) {
    //create a variable and convert every word in to lowercase
    var bars = str.toLowerCase().split('');
    // Run a for loop with the variable bars
    for(var i = 0; i < bars.length; i++) {
    //convert and concatenate the remaining elements of the word
        bars[i] = bars[i][0].toUpperCase() + bars[i].slice(1);
        // bars[i] = j + bars[i].substr(1);
    }
    
    
    
    
    // return bars and join the words 
        return bars.join('');
      }
      
      console.log(titleCase("I'm a little tea pot"));