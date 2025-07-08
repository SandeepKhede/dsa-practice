const arr = [1, 2, 3, 4, 6]
let target = 6

const pairSum = (arr,n) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right){
        const sum = arr[right] + arr[left];
        if(sum === target) return true;
        else if (sum < target) left ++;
        right --;
    }
    return false
}

console.log(pairSum(arr,target));