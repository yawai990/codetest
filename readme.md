## Not Identical Number In Serialize


There are many to answer. Here,some ways  which i know using some javascript array method...

 ### With filter method
```javascript
const arr = [1, 1, 1, 3, 0, 1, 1]; // expected output =>[1, 3, 0, 1]
function serializeCheckWithFilter(array) {
    const output = [];
    array.filter((value, idx) => {
        if (idx = 0 || value !== array[idx - 1]) {
            output.push(value)
        }
    });

    return output;
}
console.log(serializeCheckWithFilter(arr))
```

 ### With reduce method

```javascript
// const arr2 = [4, 4, 4, 3, 3] // expected output => [4,3]
const arr2 = [4,2,2,3,3,5,5,4,4,3,3,7,7,10,10,32,32,10] // output =>[4,2,3,5,4,3,7,10,32,10]
function serializeCheckWithReduce(array) {
    return array.reduce((initialValue, current, arrIdx) => {
        (arrIdx = 0 || current !== array[arrIdx - 1]) && initialValue.push(current);
        return initialValue;
    }, []);
}

console.log(serializeCheckWithReduce(arr2))
```
