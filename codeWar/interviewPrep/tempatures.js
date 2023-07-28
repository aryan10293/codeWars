var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    const result = new Array(n).fill(0); // Initialize result array with 0s.
    const stack = []; // Initialize a stack to store the indices.

    for (let i = 0; i < n; i++) {
        // Check if the current temperature is higher than the temperature at the top of the stack.
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex; // Store the days we need to wait for a warmer temperature.
        }

        stack.push(i); // Push the current index onto the stack.
    }

    return result;
};

//abouve is the effienct way

// below is the slow way
var dailyTemperatures = function(temperatures) {
    // while loop
    // keep track on current index 
    let currentTempIndex = 0
    let futureTempIndex = 1
    let count = 1
    let result = []
    while (result.length !== temperatures.length){
        if(temperatures[currentTempIndex] < temperatures[futureTempIndex]){
            result.push(count)
            futureTempIndex = currentTempIndex + 2
            currentTempIndex++
            count = 1
        } else {
            if(temperatures[futureTempIndex] === undefined){
                result.push(0)
                futureTempIndex = currentTempIndex + 2
                currentTempIndex++
                count = 1
                continue
            }
            futureTempIndex++
            count++
        }
    }
    return result
};