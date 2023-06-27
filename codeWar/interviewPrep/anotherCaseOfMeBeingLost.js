let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
function collectStrings(obj){
    let answer = {}
    function helper(obj){
        for (let key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
            // Nested object found, recursively call the function
            helper(obj[key]);
            } else {
            if(typeof obj[key] === 'number'){
                console.log(obj[key])
                obj[key] = `${obj[key]}`
            } else if(typeof obj[key] === 'string'){
                obj[key] = Number(obj[key])
            }
            // Perform your desired action on the current property
            }
        }
    }
    helper(obj)
    console.log(obj)
}
console.log(typeof true)
collectStrings(obj)