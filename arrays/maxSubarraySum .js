const maxSubarraySum  = (arr,k) => {
    let windowSum = 0;
    let maxSum = 0;


    //sum first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;


    //creating second window
    for(let i=k; i<arr.length; i++){
        windowSum = windowSum - arr[i -k] + arr[i];
        maxSum  = Math.max(windowSum,maxSum)
    }


    return maxSum;
}

console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3));