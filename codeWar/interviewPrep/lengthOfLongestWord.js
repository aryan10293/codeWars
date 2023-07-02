var lengthOfLastWord = function(s) {
    let lol = s.split(' ').filter(x => x !== '')
    return lol[lol.length -1].length
};