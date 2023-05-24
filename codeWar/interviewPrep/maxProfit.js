var maxProfit = function(prices) {
    // create a varible and set it to the profit of zero
    //creat a lowPrice varible and set it to the first element in the array 
    // loop through the price array
    // if theres a value smaller than my low price varible then re assign that varible
    // im going to subtract the lowest price from my current value and if thats higher than my profit varible then reassign my profit varible

    // outside of the loop return the profit varible
    let profit = 0
    let lowestPrice = prices[0]
    for(let i = 1; i<prices.length; i++){
        prices[i] < lowestPrice ? lowestPrice = prices[i] : prices[i] - lowestPrice > profit ? profit =  prices[i] - lowestPrice : null
    }
    return profit
};