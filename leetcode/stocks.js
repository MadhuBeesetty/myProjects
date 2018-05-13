var maxProfit = function(prices, i=0, j=i+1, profit=0) {
    if(prices.length === 0) return 0;
    if(i === prices.length) return profit;
    if(prices[i] < prices[j]){
if(prices[j] - prices[i] > profit ) profit = prices[i] - prices[j];
};
if( j === prices.length ) return maxProfit(prices, i+1, i+2, profit);
    return maxProfit(prices, i, j+1, profit);
};

console.log(maxProfit([1,2,3,4,6,1,4,8,9,]));

