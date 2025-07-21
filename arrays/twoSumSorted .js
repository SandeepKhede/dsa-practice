const arr = [2, 7, 11, 15]
const target = 9  


const twoSumSorted = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;


    while(left <= right){
        let sum = arr[left] + arr[right];
        if (sum === target) return [left+1,right+1]
        if(sum < target){
            left++;
        }
        else
            right --;
    }
    return -1;
};


console.log(twoSumSorted(arr,target))

