var isPalindrome = function(s) {
    const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    s = s.split('').filter(x => alphabets.includes(x.toLowerCase())).join('').toLowerCase()
    let answer = s.split('').filter(x => alphabets.includes(x.toLowerCase())).reverse().join('').toLowerCase()
    console.log(s, answer)
    return s === answer
};