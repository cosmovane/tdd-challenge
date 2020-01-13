function palyndrome(word){
    var lowerCaseWord = word
      .toLowerCase()
      .replace(/\s/g, '')
  
    var reversedWord = lowerCaseWord
      .split("")
      .reverse()
      .join("")
      
    return reversedWord == lowerCaseWord
  }
  
  module.exports = palyndrome