// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
var twoSum = function(numbers, target) {
    for(let i = 0; i < numbers.length - 1; i++) {
        let left = i;
        let right = numbers.length - 1;
        let diff = target - numbers[left++];
        while(right >= left) {
            const mid = Math.floor((left+ right)/2);
            if(numbers[mid] === diff) return [i + 1,mid + 1];
            if(diff > numbers[mid]) left = mid + 1;
            else right = mid - 1;
        }
    }
    return [];
};