const squreRoot = (n) => {
    let ans;
    for (let i=1; i*i<= n ; i++){
      ans = i;
    }
    return ans;
}

// console.log(squreRoot(5))

//using binary search

const squareRoot = (n) => {
    if(n < 2) return n;

    let low = 0;
    let high = n;
    let ans = 0;

    while(low <= high){
        let mid = Math.floor((low+high)/2);

        if(mid*mid === n) return mid;

        if(mid*mid < n){
            ans = mid;
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }

    return ans;
}

console.log(squareRoot(5))