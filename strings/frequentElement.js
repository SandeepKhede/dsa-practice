const arr = [1,1,1,2,2,3]
const k = 2  

const frequentElement = (arr,k) => {
    const freq = {};
    const res = []
    for(let i=0; i<arr.length; i++){
        freq[arr[i]] = (freq[arr[i]] ||0) + 1;
    }

    return Object.keys(freq).sort((a, b) => freq[b] -freq[a]).slice(0,k).map(Number)

    // console.log(sortedObj);
    

    // for (let i=0; i<k; i++){  
    //      res.push(Number(sortedObj[i]));
    // }

    // return res;

}


// console.log(frequentElement(arr,k));


const freqElem = (arr) => {
    const freqMap = new Map();
    for(let item of arr){
        if(freqMap.has(item)){

            freqMap.set(item,freqMap.get(item)+1)
        }
        else{
            freqMap.set(item,1)
        }
        }

        return freqMap;

}

console.log(freqElem(arr))