const findMedian = (arr) => {
    const n = arr.length;

    const quickSelect = (left,right , k) => {
        const pivot = arr[right];
        let pIndex = left;

        for(let i=left; i<right; i++){
            if(arr[i] <= pivot){
                [arr[i], arr[pIndex]] = [arr[pIndex], arr[i]];
                pIndex++;
            }
        }
        [arr[pIndex], arr[right]] = [arr[right], arr[pIndex]];
    
        if(pIndex === k) return arr[pIndex];
    
         if(pIndex < k) return quickSelect(pIndex+1, right, k)
        return quickSelect(left,pIndex-1,k)
    }

    if(n%2 === 1){
        return quickSelect(0, n-1,Math.floor(n/2))
    }
    else{
        const mid1 = quickSelect(0, n-1,Math.floor(n/2));
        const mid2 = quickSelect(0, n-1,Math.floor(n/2)-1)
        return (mid1+mid2) /2;
    }
}

console.log(findMedian([3, 2, 1, 5, 6, 4])); // 3.5
