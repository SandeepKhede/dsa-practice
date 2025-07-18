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

// console.log(removeAdjacent("abbaca"))

const isPalindrome = (str,left,right) => {

    while(left<right){
        if(str[left] != str[right]) return false;
        left++;
        right--;
    }

    return true;
}


const nearPalindrome = (str) => {
    let left = 0;
    let right = str.length-1;

    while(left < right){
        if(str[left] != str[right]){
          return isPalindrome(str,left+1,right) || isPalindrome(str,left,right-1)
        }
        left++;
        right--;
    }
    return true;
}

// console.log(nearPalindrome("abca"));
// console.log(nearPalindrome("abc"));
// console.log(nearPalindrome("racecar"));


const freqMap = (arr) => {
    const map = new Map();

    for (let num of arr){
        map.set(num, (map.get(num) || 0) + 1)
    }

    return map;
}

console.log(freqMap([1, 2, 2, 3, 3, 3]))