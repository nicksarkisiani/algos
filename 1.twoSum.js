/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // let sum = 0;
    // for(let i = 0; i < nums.length; i++){
    //     sum+=nums[i];
    //     for(let j = 0; j < nums.length; j++){
    //         if(i === j) continue
    //         sum+=nums[j]
    //         if(sum === target){
    //             return [i, j];
    //         }
    //         sum-=nums[j];
    //     }
    //     sum-=nums[i];
    // }

    //  let obj = {}

    // for(let i = 0; i < nums.length; i++){
    //     if(obj[nums[i]]) {
    //         obj[nums[i]].push(i);
    //     } else {
    //         obj[nums[i]] = [i];
    //     }
    //     const arr = obj[target - nums[i]]
    //     if(arr && arr.length === 1 && arr.at(-1) !== i) {
    //         return [i, arr.pop()]
    //     } 
    //     if(arr && arr.length > 1){
    //         return [arr.at(0), arr.pop()]
    //     }
    // }

    let obj = {}

    for(let i = 0; i < nums.length; i++){
        
        if(!(nums[i] in obj)) obj[nums[i]] = i;
        const num = obj[target - nums[i]]

        if(num !== undefined && num !== i){
            return [num, i]
        }
    }


};