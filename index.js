class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }
  static titleize(string){
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let phrase = []
    let str = string.split(' ')
    for (var i = 0; i < str.length; i++){
      if (i === 0){
        phrase.push(this.capitalize(str[i]))
      } else {
        if (exceptions.includes(str[i])){
          phrase.push(str[i])
        } else {
          phrase.push(this.capitalize(str[i]))
        }
      }
    }
    return phrase.join(' ')
  }
}