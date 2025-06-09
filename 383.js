// 383. Ransome Note

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let ranArray = [...ransomNote];
  let magArr = [...magazine];
  // find number of occurance of each Chara in ransomeNote and magazine
  let ranMap = {};
  let magMap = {};
  convertArrayToMap(ranArray, ranMap);
  convertArrayToMap(magArr, magMap);
  console.log(ranMap);
  console.log(magMap);

  // check if all the elements and min(occurance) matches from each element present in ranMap inside magMap
  for (const ranKey in ranMap) {
    if (ranMap[ranKey] > magMap[ranKey] || !magMap[ranKey]) {
      return false;
    }
  }

  return true;
};

console.log(canConstruct("aa", "aab"));
console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(
  canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj")
);

function convertArrayToMap(ranArray, ranMap) {
  for (const ranChar of ranArray) {
    if (ranMap.hasOwnProperty(ranChar)) {
      ranMap[ranChar] = ranMap[ranChar] + 1;
    } else {
      ranMap[ranChar] = 1;
    }
  }
}
