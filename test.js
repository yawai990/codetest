const arr = [1, 1, 1, 3, 0, 1, 1]; // expected output =>[1, 3, 0, 1]
// const arr = [0, 0, 0, 0, 2, 2, 1, 2, 3, 3, 4, 4, 9, 9, 9, 8, 8, 5, 5, 5]; //expected output =>[0,2,1,2,3,4,9,8,5]


// const output =[];
// expectedoutput =>[2,3,4,21,32,43,65,2,4,62,34]
// arr.filter((value, idx, arr) => {
//     // console.log(value)
//     if (idx = 0 || value !== arr[idx - 1]) {
//         output.push(value)
//     }
// });
// console.log(output)

// function serializeCheckWithFilter(array) {
//     const output = [];
//     array.filter((value, idx) => {
//         if (idx = 0 || value !== array[idx - 1]) {
//             output.push(value)
//         }
//     });

//     return output;
// }
// console.log(serializeCheckWithFilter(arr))
function serializeCheckWithFilter(array) {
    const output = [];
    const result = array.filter((value, idx) => value !== array[idx - 1]);
    console.log(result)

    return output;
}
console.log(serializeCheckWithFilter(arr))

//with reduce
const arr2 = [4, 4, 4, 3, 3] // expected output => [4,3]
// const arr2 = [4, 2, 2, 3, 3, 5, 5, 4, 4, 3, 3, 7, 7, 10, 10, 32, 32, 10] // output =>[4,2,3,5,4,3,7,10,32,10]
function serializeCheckWithReduce(array) {
    return array.reduce((initialValue, current, arrIdx) => {
        (arrIdx = 0 || current !== array[arrIdx - 1]) && initialValue.push(current);
        return initialValue;
    }, []);
}

console.log(serializeCheckWithReduce(arr2))

