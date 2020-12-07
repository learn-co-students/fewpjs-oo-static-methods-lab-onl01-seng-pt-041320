class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
  static titleize(sentence) {
      let misc = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
      let newArray = [];
      let words = sentence.split( " " )
      for ( let n = 0; n < words.length; n++) {
        if ( n == 0 ) {
          newArray.push(this.capitalize(words[n]))
        } else {
          if (misc.includes(words[n])) {
            newArray.push(words[n])
          } else {
            newArray.push(this.capitalize(words[n]))
          }
        }

      }
      return newArray.join( " " );
    }
  }