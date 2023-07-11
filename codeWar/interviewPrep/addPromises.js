var addTwoPromises = async function(promise1, promise2) {
    let lol = await Promise.all([promise1, promise2])
    return lol[0] + lol[1]
};