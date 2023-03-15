function disemvowel(str) {
    const vowels = 'aeiou'
    return str.split('').filter(x => {if(!vowels.includes(x.toLowerCase())) return x}).join('');
  }