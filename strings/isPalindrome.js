const isPalindrome = (str) => {
    //clean string
    const clean = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    // const reverse = clean.split('').reverse('').join('')
    // return clean === reverse

    let left = 0;
    let right = str.length - 1;

    while(left<right){
      if(clean[left] != clean[right]) return false
      left++;
      right--;
    }

    return true;

}

console.log(isPalindrome("test"));