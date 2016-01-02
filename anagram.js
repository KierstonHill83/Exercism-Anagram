function Anagram(word) {
  this.word = word;
}

Anagram.prototype.matches = function(array, str2, str3) {
  var result = [];
  var newArray = [];
  var originalSorted = this.word.toLowerCase().split('').sort().join('');
  if (typeof array === 'string' && typeof str2 === 'string' && typeof str3 === 'string') {
    newArray.push(array);
    newArray.push(str2);
    newArray.push(str3);
  } else if (typeof array === 'string') {
    newArray.push(array);
  } else {
    newArray = array;
  }
  for (var i = 0; i < newArray.length; i++) {
    if (this.word.toLowerCase() === newArray[i].toLowerCase()) {
      return result;
    } else if (originalSorted === newArray[i].toLowerCase().split('').sort().join('') && originalSorted.length === newArray[i].length) {
      result.push(newArray[i]);
    }
  } 
    return result;
};


var anagram = function(arguments) {
  return new Anagram(arguments);
};


module.exports = anagram;