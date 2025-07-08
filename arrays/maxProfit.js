// Input: prices = [7,1,5,3,6,4]
// Output: 5 
// Buy at 1, sell at 6

const nums  = [7,1,5,3,6,4]

function maxProfit(arr){
    let minPrice = arr[0];
    let maxProfit = 0;

    for (let i=0; i< arr.length; i++){
        if(arr[i] < minPrice){
            minPrice = arr[i];
        }
        let profit = arr[i] - minPrice;
        if(profit > maxProfit){
            maxProfit = profit;
        }
        
    }
    return maxProfit;
}

console.log(maxProfit(nums))