const isAnagram = (str1,str2) => {
    if(str1.length < str2.length) return false;
    let obj = {}
    for(let i=0; i<str1.length; i++){
        obj[str1[i]] = i;
    }

    for(let i=0; i<str2.length; i++){
        if(!obj[str2[i]]) return false
        obj[str2[i]]--;
    }

    return true
}

console.log(isAnagram('listen', 'silent'))