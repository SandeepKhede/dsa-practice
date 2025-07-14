const findKtheLargestQuick = (arr,k) => {
    const indexToFind = arr.length - k;
    //change it to k-1 to get smallest 

    const partition = (left,right) => {
        let pivot = arr[right];
        let pIndex = left;

        for(let i=left; i<right; i++){
            if(arr[i] <= pivot){
                [[arr[i],arr[pIndex]]] = [[arr[pIndex],arr[i]]];
                pIndex++;
            }
        }
         [[arr[pIndex],arr[right]]] = [[arr[right],arr[pIndex]]];
        return pIndex;
    }

    let left = 0;
    let right = arr.length - 1;
    
    while(left <= right){
        const pivotIndex = partition(left,right);
        if(pivotIndex === indexToFind){
            return arr[pivotIndex];
        }else if(pivotIndex < indexToFind){
            left = pivotIndex + 1;
        }else {
            right = pivotIndex - 1;
        }
    }
}

console.log(quickSelection([3, 2, 1, 5, 6, 4], 1));