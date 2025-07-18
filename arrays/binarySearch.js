const binarySearch = (arr) => {
    let left = 0;
    let right = arr.length - 1;


    while(left <= right){
        let mid = Math.floor((left+right)/2);

        if(arr[mid] === target) return mid;

        if(arr[mid] < target) left = mid + 1
        else right = mid - 1;
    }

    return -1;
}


const arr = [1, 3, 5, 7, 9, 11] 
let target = 7 ;

console.log(binarySearch(arr,target));