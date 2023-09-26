var maxProfit = function(prices) {
    //
    let maxProfit = 0
    let start = 0
    let end = 1
    let minimum = prices[0]
    for(let i = 1; i<prices.length; i++){
        if(minimum > prices[i]){
            minimum = prices[i]
            end++
        } else {
            let currentProfit = prices[end] - minimum
            if(currentProfit !== NaN && currentProfit > maxProfit){
                maxProfit = currentProfit
            }
            end++
        }
    }
    return maxProfit
};