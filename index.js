class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string) {
    let words = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let stringsTitleized = [];
    let stringArray = string.split(" ");
    for (let i=0; i < stringArray.length; i++) {
      if (i == 0) {
        stringsTitleized.push( this.capitalize(stringArray[i]))
      } else {
        if (words.includes(stringArray[i])) {
          stringsTitleized.push(stringArray[i])
        } else {
          stringsTitleized.push(this.capitalize(stringArray[i]))
        }
        }
      }
      return stringsTitleized.join(" ");
      }
  }

  