const myArr = [3, 5, 6, 8, 11, 33, 45];
const numSearch = 33;

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor(left + right) / 2;
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            return mid;
        } else {
            right = mid -1;
        }
    }
    return -1;

}

const result = binarySearch(myArr, numSearch);
