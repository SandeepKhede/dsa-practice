const firstOccurrence = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      result = mid;         
    //   right = mid - 1; 
    left = mid + 1;    
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
};

const arr = [1, 2, 2, 2, 3,2, 4];
const target = 2;

console.log(firstOccurrence(arr, target)); 
