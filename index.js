class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    const tooSmall = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let newSentence = string.split(" ")[0].charAt(0).toUpperCase() + string.slice(1)
    newSentence = newSentence.split(" ")
    for (let i = 1; i < newSentence.length; i++) {
      if (!tooSmall.includes(newSentence[i])) {
        let change = newSentence[i].charAt(0).toUpperCase() + newSentence[i].slice(1)
        newSentence.splice(i, 1, change)
        newSentence.join(" ")
      }
    }
    return newSentence.join(" ")
  }
}