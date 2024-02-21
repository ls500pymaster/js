const car = {
    'color': "Black",
    'brand': "Lexus",
    'model': "GS",
    'engine': "V6",
    'markLewinson' : undefined,
};


console.log('engine' in car);

for (let key in car) {

    const val = car[key];
    console.log("key ->", key);
    console.log("value ->", val);
}