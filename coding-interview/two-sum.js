// 두수의 합
// https://leetcode.com/problems/two-sum/

/* 
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

console.log(twoSum([2, 7, 11, 15], 9));

// 브루트 포스
// 시간 복잡도 n^2
// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [0, 1];
// }

// 타켓에서 숫자를 뺀 값이 존재하는지 확인
// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     const remain = target - nums[i];
//     const index = nums.slice(i + 1).indexOf(remain);
//     if (index > -1) {
//       return [i, i + 1 + index];
//     }
//   }
// }

// 뺀 값을 딕셔너리에 저장

// function twoSum(nums, target) {
//   const map = {};
//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     map[num] = i;
//   }
//   for (let i = 0; i < nums.length; i++) {
//     const remain = target - nums[i];
//     if (remain in map && i !== map[remain]) {
//       return [i, map[remain]];
//     }
//   }
//   return null;
// }

// function twoSum(nums, target) {
//   const map = {};
//   for (let i = 0; i < nums.length; i++) {
//     const remain = target - nums[i];
//     if (remain in map) {
//       return [map[remain], i];
//     }
//     map[nums[i]] = i;
//   }
// }
