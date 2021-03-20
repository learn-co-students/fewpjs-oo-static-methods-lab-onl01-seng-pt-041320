class Formatter {
  static capitalize(string)
  {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string)
  {
    let newString = [];

    for (let i = 0; i < string.length; i++)
    {
      if (string[i].match(/[a-zA-Z-' ]/))
      {
        newString.push(string[i]);
      }
    }

    return newString.join('');
  }

  static titleize(string)
  {
    const exceptions = ["the", 'a', "an", "but", "of", "and", "for", "at", "by", "from"];
    const wordArray = string.split(' ');
    let newString = [];

    for (let i = 0; i < wordArray.length; i++)
    {
      if (i === 0 || !exceptions.includes(wordArray[i]))
      {
        newString.push(this.capitalize(wordArray[i]));
      }
      else
      {
        newString.push(wordArray[i]);
      }
    }

    return newString.join(' ');
  }
}