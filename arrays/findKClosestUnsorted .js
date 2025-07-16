const findKClosestUnsorted  = (arr,k,x) => {
    const maxHeap = [];

    for(let num of arr) {
        const diff = Math.abs(num -x);
        maxHeap.push([diff,num]);
        
        maxHeap.sort((a, b) => b[0] - a[0]);

        if(maxHeap.length>k){
            maxHeap.shift()
        }
    }

    return maxHeap.map((item) => item[1])
}

console.log(findKClosestUnsorted([10, 1, 5, 2, 8], 3, 6)); 