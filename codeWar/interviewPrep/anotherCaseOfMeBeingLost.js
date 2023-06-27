const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
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
            // Perform your desired action on the current property
            answer[obj[key]] = answer[obj[key]] + 1 || 1
            }
        }
    }
    helper(obj)
    return Object.keys(answer)
}
collectStrings(obj)