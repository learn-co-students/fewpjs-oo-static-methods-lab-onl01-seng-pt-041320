class Formatter {
  //add static methods here
  static capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  static sanitize(word){
    return word.replace(/[^A-Za-z0-9-']+/g, '');
    //return word.replace(/!\s\w+\s+\w+''/g, '');
  }

  static titleize(sentence){
    let word = sentence.split(' ');
    let preps = ["the", "of", "but", "and", "an", "or", "in", "a", "for", "at", "by", "from"];
    let newarr = []
    word = word.map(function(str){
      if(preps.includes(str)){
        newarr.push(str);
      } else if(str[0] === word[0]){
        let x = str[0].toUpperCase();
        console.log(x);
        newarr.push(x);
      } else {
        let result = str.charAt(0).toUpperCase() + str.slice(1);
        newarr.push(result);
      }
      
    });
    return newarr.join(' ');
  }

}

//Formatter.titleize("A tale of Two Cities");