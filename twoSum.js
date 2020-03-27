var twoSum = function(nums, target) {
    let altNum = [...nums]
    altNum.shift()
    let output = []
    for (i = 0; i < nums.length; i++) {
        var result = altNum.indexOf(target-nums[i])
        if ((result >= 0)){
            output.push(nums.indexOf(nums[i]))
            output.push(result+1+nums.indexOf(nums[i]))
            break
        }
        else {
            altNum.shift()
        }
    }
 console.log(output)
 };

 twoSum([3,2,4], 6)