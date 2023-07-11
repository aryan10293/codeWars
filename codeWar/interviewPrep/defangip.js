var defangIPaddr = function(address) {
    let cool = address.split('').map(x => {
        if(x === '.'){
            return '[.]'
        } else {
            return x
        }
    })
    return cool.join('')
}