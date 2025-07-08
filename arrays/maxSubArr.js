const arr = [2, 1, 5, 1, 3, 2]
let k = 3
const maxSubArr = (arr,k) => {
    let maxSum = 0;
    let windowSum = 0;

    //1st slide
    for(let i=0; i<k; i++){
        windowSum += arr[i]
    }

    maxSum = windowSum;

    //step to slide window from k to end
    for(let i=k; i<arr.length;i++){
        windowSum = windowSum + arr[i] - arr[i-k]
        maxSum= Math.max(maxSum,windowSum);
    }
    return maxSum

}

console.log(maxSubArr(arr,k))