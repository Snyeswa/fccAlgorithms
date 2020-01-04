// Basic Algorithm Scripting: Repeat A String Repeat a srting

function repeatStringNumTimes(str, num) {
    // repeat after me
    var arr = "";
  if( num < 0) return arr;
    for(var i =0; i < num; i++){
      arr += str;
    }
    return arr;
  }
  
  repeatStringNumTimes("abc", 3);
  