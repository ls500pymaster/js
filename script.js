const name = prompt("Input name");
const area = prompt("Input area");
const population = prompt("Input population");
const mainStreet = prompt("Input main street");
const mayorsName = prompt("Input mayors name");


function showCity (name, area, population, mainStreet, mayorsName) {
    const objCity = {
        'Name': name,
        'Area': area,
        'Population': population,
        'Main Street': mainStreet,
        'Mayors Name': mayorsName,
    }
    console.log(objCity);
}

showCity(name, area, population, mainStreet, mayorsName);
