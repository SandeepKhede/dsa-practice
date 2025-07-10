const firstNonRepeating = (str) => {
    let obj={};
    for(let char of str){
        obj[char] = (obj[char] || 0) +1;
    }

    for(let i=0; i<str.length; i++){
        if(obj[str[i]] === 1){
            return i;
        }
    }
    return -1;
}

console.log(firstNonRepeating("leetcode"))