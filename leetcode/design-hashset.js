// https://leetcode.com/problems/design-hashset/
MyHashSet.prototype.add = function (key) {
  this.hash[key] = true;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  delete this.hash[key];
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  return this.hash[key] ? true : false;
};
