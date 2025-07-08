// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]  
// Because nums[0] + nums[1] === 9

const nums = [2, 7, 11, 15]
const target = 200
function twoSum(nums, target) {
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] + nums[j] == target){
                return true
            }
            return false;
        }
    }
    return false;
}

console.log(twoSum(nums,target))

