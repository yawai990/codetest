//my ways

//inefficient algorithms // my bad
// function getDivisor(n) {
//     /// 1 is can divide every number;
//     //start to think from 2;
//     // let divisor = [];
//     let count = 0

//     // console.log() //last value of the array
//     for (let i = 1; i <= n; i++) {
//         if (n % i === 0) {
//             // divisor.push(i)
//             count++
//         }

//     }

//     // return divisor
//     return count

// };

function getDivisor(n) {
    let count = 0;
    const sqrtN = Math.sqrt(n);
    for (let i = 1; i <= sqrtN; i++) {
        if (n % i === 0) {
            count += 2; // Count both i and n/i as divisors
        }
    }

    // If n is a perfect square, we need to decrement count by 1
    if (sqrtN === Math.floor(sqrtN)) {
        count--;
    }

    return count;
}

console.log(getDivisor(24)); //ouput [1,3,7,21]
// console.log(21 % 3)