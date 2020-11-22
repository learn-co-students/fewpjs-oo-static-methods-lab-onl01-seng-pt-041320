class Formatter {
  //add static methods here
  static capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  static sanitize(word){
    return word.replace(/[^-'\sA-Za-z0-9]/g, '');
  }

  static titleize(sentence){
    let word = sentence.split(' ');
    let preps = ["the", "of", "but", "and", "an", "or", "in", "a", "for", "at", "by", "from"];

    word = word.map((e,i) => preps.indexOf(e) == -1 || i === 0 ? e[0].toUpperCase()+e.slice(1) : e).join(" ");
    return word;
  }

}
