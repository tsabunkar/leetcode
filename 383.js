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

  // check if all the elements and occurance matches from each element in ranMap inside magMap
  /*   for (const ranChar of ranArray) {
    for (const magChar of magArr) {
      if (ranChar !== magChar) {
      }
    }
  } */
};

console.log(canConstruct("abca", "aab"));

function convertArrayToMap(ranArray, ranMap) {
  for (const ranChar of ranArray) {
    if (ranMap.hasOwnProperty(ranChar)) {
      ranMap[ranChar] = ranMap[ranChar] + 1;
    } else {
      ranMap[ranChar] = 1;
    }
  }
}
