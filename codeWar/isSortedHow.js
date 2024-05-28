function isSortedAndHow(array) {
    let ass = null
    let des = null
    console.log(array)
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] >= array[i]) {
            des = true
        } else if (array[i - 1] <= array[i]) {
            ass = true
        }
    }
    console.log(ass, des)
    return ass && des ? 'no' : ass ? 'yes, ascending' : 'yes, descending'
}