const maxWater = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    let maxWater = 0;

    while(left < right){
        let h = Math.min(arr[left],arr[right]);
        let w = right - left;
        let area = h * w

        maxWater = Math.max(maxWater,area);

        if(arr[left]< arr[right]){
            left++;
        }else{
            right --;
        }
    }

    return maxWater;
}

console.log(maxWater([1,8,6,2,5,4,8,3,7]));
