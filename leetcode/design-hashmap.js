// https://leetcode.com/problems/design-hashmap/
var MyHashMap = function() {
  this.map = {};
};

MyHashMap.prototype.put = function(key, value) {
  this.map[key] = value;
};

MyHashMap.prototype.get = function(key) {
  return this.map[key] != null ? this.map[key] : -1;
};

MyHashMap.prototype.remove = function(key) {
  delete this.map[key];
};
