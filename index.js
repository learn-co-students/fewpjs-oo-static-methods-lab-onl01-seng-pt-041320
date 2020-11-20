class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
}
  static titleize(string) {
    let newWords = string.split(" ")
    let firstWord = newWords.splice(0,1).toString()
    let newString = newWords.map(function(word) {
      if (word === "the" || word === "a" || word === "by" || word === "an" || word === "at" || word === "from" || word === "but" || word === "of" || word === "and" || word === "for") {
        return word.charAt(0).toLowerCase() + word.slice(1);
      }
      else {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    })
    
    newString.unshift(firstWord.charAt(0).toUpperCase() + firstWord.slice(1))
    return newString.join(" ")
  
}
}