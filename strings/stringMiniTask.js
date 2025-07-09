const reverseSentence = (str) => {
    const splitArr = str.split(' ')
    console.log(splitArr)
    return splitArr.reverse('').join(' ')
}
// console.log(reverseSentence("hello world"))

// 🔸 2. Reverse Only the Vowels
// Input: "leetcode"
// Output: "leotcede"

const reverseVowel = (str) => {
    const arr = str.split('');
    const regex = /[aeiou]/g
    let left = 0;
    let right = str.length - 1;

    while ( left < right){
       if(arr[left].match(regex) && arr[right].match(regex)){
            [arr[left],arr[right]] = [arr[right],arr[left]]
       }
       else left++
       right--
    }

    return arr.join('');
}

// console.log(reverseVowel("leetcode"));


// 🔸 3. Check if Two Strings are Isomorphic
// Input: "egg", "add" → ✅ true
// Input: "foo", "bar" → ❌ false

// 🧠 Logic:

const isoMorphic = (str1, str2) => {
    let map1 = {};
    let map2 = {};

    
    if(str1.length < str2.length) return false;
    
    for(let i=0; i<str1.length; i++){
        let char1 = str1[i];
        let char2 = str2[i];

        if(map1[char1] === undefined){
            map1[char1] = char2
        }
        else if(map1[char1] != char2) return false;

        
        if(map2[char2] === undefined){
            map2[char2] = char1
        }
        else if(map2[char2] != char1) return false;

    }

    return true;
}


// console.log(isoMorphic('badc','baba'));


// 🔸 4. Remove All Adjacent Duplicates in a String
// Input: "abbaca"
// Output: "ca"


const removeAdjacent = (str) => {
    const stack = [];

    for(let char of str){
        if(stack.includes(char)){
            stack.pop();
        }
        else stack.push(char)
    }
    return stack.join('');
}

console.log(removeAdjacent("abbaca"))