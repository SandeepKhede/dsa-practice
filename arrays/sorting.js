// 🔹 Problem 1: Binary Search
// Given a sorted array, return the index of the target element using binary search.
// If not found, return -1.

// Input: 
const arr = [1, 3, 5, 7, 9]
let target = 5  
// Output: 2


const tagerEle = (arr,target) => {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid] === target) return mid;

        else if(arr[mid] < target) left = mid+1;
        else right = mid -1;
    }

    return -1;

}

// console.log(tagerEle([1, 3, 5, 7, 9], 6))



// 🔹 Problem 2: Sort 0s, 1s and 2s
// Given an array with values 0, 1, 2 in random order, sort it in-place without using built-in .sort().

// Example:
// Input: [2, 0, 2, 1, 1, 0]  
// Output: [0, 0, 1, 1, 2, 2]

// const arr1 = [2, 0, 2, 1, 1, 0]

const sortZero = (arr) => {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    while (mid <= high){
        if(arr[mid] === 0){
            [arr[low],arr[mid]] = [arr[mid],arr[low]];
            low++;
            mid++;
        }
        else if (arr[mid] === 1){
            mid++;
        }
        else if (arr[mid] === 2){
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }


    return arr;
}

// console.log(sortZero([2, 0, 2, 1, 1, 0]))


// 🔹 Bonus Problem: Find Kth Largest Element
// Given an integer array nums and an integer k, return the kth largest element in the array.
// Input: nums = [3,2,1,5,6,4], k = 2  
// Output: 5

// (2nd largest number is 5)

const findKtheLargest = (arr,k) => {
    //  arr.sort((a,b) => b -a);
    //  return arr[k-1];

    let minHeap = [];


    for(let num of arr){
        minHeap.push(num);

        if(minHeap.length > k){
            minHeap.sort((a,b) => a -b);
            minHeap.shift();

        }
    }

        console.log(minHeap)

    return Math.min(...minHeap)
}

console.log(findKtheLargest([7, 10, 4, 3, 20, 15], 3))
