// get the number(count) of vowels;

function getCount(str) {
    const vowel = ['a', 'e', 'i', 'o', 'u'];

    // change the string to the array by word;
    // const result = str.split('').map(k => vowel.includes(k)).filter(h => h === true && h).length;
    // return result;

    //2nd way
    return str.match(/[aeiou]/ig).length
}

const getCountAns = getCount('good morning, i am yawai');


// function oddOrEven(numArr) {
//     const result = numArr.reduce((resut, acc) => {
//         const total = resut + acc;
//         return total
//     }, 0);

//     return result % 2 === 0 ? "even" : "odd"
// }


//let see
// if the interger is 3;  bitwise will be 000000011;
// if the interger is 1; bitwise will be  000000001
/*
    when we are compare the two number with bitwise, 
    we saw only last number include 1 in both value;
    accouding to the bitwise, & operation 
    0   0    => 0
    0   1    => 0
    1   0    => 0
    1   1    => 1

*/

// With BitWise 
// const sum = (a, b) => a + b;
// const oddOrEven = arr => ['even', 'odd'][arr.reduce(sum, 0) & 1];
// console.log(oddOrEven([0, -2, -4]))
// const evenOddAns = oddOrEven([0, -2, -4]);
// console.log(evenOddAns)


function validIp(str) {
    const ip = str.split('.');
    if (ip.length === 4) {

        //check all of the ip are greater than zero and less than 255;
        const a = ip.filter(i => !i.startsWith('0'))

        if (a.length === 4) {
            const z = a.filter(b => Number(b) >= 0 && Number(b) <= 255 && !isNaN(Number(b)))
            return z.length === 4 ? true : false
        } else {
            return false
        }
    } else {
        return false
    }
};
console.log(validIp(' 1.2.3.4'))