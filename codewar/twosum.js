/**
 * Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
 */

// function twoSum(numbers, target) {
//     let indexed = {};

//     for (let i = 0; i < numbers.length; i++) {
//         const num = numbers[i];
//         const com = target - num;

//         console.log(indexed.hasOwnProperty(com))
//         if (indexed.hasOwnProperty(com)) {
//             return [indexed[com], i]
//         }
//         indexed[num] = i;
//     };

//     return [-1, -1];
// }

//linear search
// function twoSum(num, target) {
//     let times = 1;
//     for (let i = 0; i < num.length; i++) {    //1
//         for (let j = i + 1; j < num.length; j++) {
//             //3
//             if (num[i] + num[j] === target) {
//                 return [i, j];
//             }
//             console.log(times)
//         }
//     }

// }
function twoSum(num, target) {
    let map = new Map();
    // 1 => 0 , 2=> 1, 3=>2
    for (let i = 0; i < num.length; i++) {
        if (map.has(target - num[i])) {
            return [map.get(target - num[i]), i]
        } else {
            map.set(num[i], i)
        }
    }
}
const result = twoSum([1, 2, 3, 4], 7) //output should be [2,0] or [0,2]
// //0 2 => 4

console.log(result)


