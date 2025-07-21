const moveZeroes  = (arr) => {

    let lastNonZeroIndex = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== 0){
            arr[lastNonZeroIndex] = arr[i]
            lastNonZeroIndex++;
        }
    }

   
    for(let i=lastNonZeroIndex; i<arr.length; i++){
        arr[i] = 0;
    }

    return arr;

}


// Input: [0, 1, 0, 3, 12]  
// Output: [1, 3, 12, 0, 0]

const arr = [0, 1, 0, 3, 12];


console.log(moveZeroes(arr))