export const twoSum1 = function (nums, target) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              arr.push(i)
              arr.push(j)
              return arr;
          }
      }
  }
};

export const twoSum2 = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
      obj[nums[i]] = i
  }

  for (let i = 0; i < nums.length; i++) {
      if (obj.hasOwnProperty(target - nums[i]) && obj[target - nums[i]] !== i) {
          return [i, obj[target - nums[i]]]
      }
  }
};

export const twoSum3 = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
      map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
      if (map.has(target - nums[i]) && map.get(target - nums[i]) !== i) {
          return [i, map.get(target - nums[i])]
      }
  }
};



export const twoSum4 = function (nums, target) {
  let obj = {}
  for(let i=0; i<nums.length; i++){
      if(obj.hasOwnProperty(target - nums[i])){
          return [obj[target-nums[i]], i]
      }
      obj[nums[i]] = i;
  }
};

export const twoSum5 = function (nums, target) {
  let map = new Map();
  for(let i=0; i<nums.length; i++){
      if(map.has(target - nums[i])){
          return [map.get(target-nums[i]), i]
      }
      map.set(nums[i], i)
  }
};
