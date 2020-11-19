class Formatter {
  
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^-'\sA-Za-z0-9]/g, '');
  }

  //'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'
  static titleize(string){
    const words = string.toLowerCase().split(" ");
    const capMost = words.map(word => {
      if ( word !== 'the' && word !== 'a' && word !== 'an' && word !== 'but'  && word !== 'of' && word !== 'and' && word !== 'for' && word !== 'at' && word !== 'by' && word !== 'from'){
        return word[0].toUpperCase() + word.slice(1)
      } else {
        return word
      }
    }).join(" ");
    return capMost.charAt(0).toUpperCase() + capMost.slice(1);
  }                  
}