const findClosestElements = ( arr,k,n) => {
    let left = 0;
    let right = arr.length - 1;

    while(right - left >= k){
        if(Math.abs(arr[left] - n) > Math.abs(arr[right] - n) ){
            left++;
        }
        else{
            right --;
        }
    }

    return arr.slice(left,right+1);
}

console.log(findClosestElements([1,1,2,3,4,5], 4, -1));