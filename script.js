const newArr = [false, 12, '23424', false, 324, '', true, null, 5, -0, 0, 9, undefined, NaN, 6.354, undefined, 7, null];

const result = newArr.filter((elem) => Boolean(elem));

console.log(result);
