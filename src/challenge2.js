const challenge2x = (word, upperCase=false) => {
    var alphabet = ""
    if(upperCase){
      alphabet = 'AbcdEfghIjklmnOpqrstUvwxyzA'.split('')
    } else{
      alphabet = 'abcdefghijklmnopqrstuvwxyza'.split('')
    }
    var result = ""
    for(i=0;i<word.length;i++){
      for(j=0;j<alphabet.length;j++){
        if(word[i].toLowerCase() == alphabet[j].toLowerCase()){
          result += alphabet[j+1]
        }
      }
    }
    return result
  }
  
  const challenge2 = (word, upperCase) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyza'.split('')
    const vowels = 'aeiou'.split('')
  
    let result = ""
    word.split('').forEach(letter => {
      const index = alphabet.indexOf(letter)
      let newLetter = alphabet[index + 1]
      if (vowels.includes(newLetter) && upperCase) {
        newLetter = newLetter.toUpperCase()
      }
      result += newLetter
    })
  
    return result
  }
  
  module.exports = challenge2