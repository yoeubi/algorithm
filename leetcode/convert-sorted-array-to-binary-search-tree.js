// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
var sortedArrayToBST = function (nums) {
  return convert(0, nums.length - 1);
  /**
   * @param {number} i
   * @param {number} j
   * @return {TreeNode}
   */
  function convert(i, j) {
    if (i > j) return null;
    const mid = parseInt((i + j) / 2);
    const node = new TreeNode(nums[mid]);
    node.left = convert(i, mid - 1);
    node.right = convert(mid + 1, j);
    return node;
  }
};
