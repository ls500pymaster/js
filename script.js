const arr = [2, 4, 5, 10, 22];

function removeElement(arr, elem, newElem) {
    let found = false
    for (let i = 0; i < arr.length; i++) {
        console.log(elem)
        if (arr[i] === elem) {
            arr.splice(i, 1, newElem);
            found = true;
            console.log(arr);
        }
    }
    if (found === false) {
        return arr;
    }
}
removeElement(arr, 2, 777);
console.log('arr ->', arr)