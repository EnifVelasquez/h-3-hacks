/**
 * mediante el loop for agregar los valores
 * de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
 * dentro del array result 
 * 
 * 
 * output => [1,2,3,4,5]
 */
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];
let arrLenght = arr.length;
let valuesArr;
let arrObject;

for (let i = 0; i < arrLenght; i++) {
    arrObject = arr[i];
    valuesArr = Object.values(arrObject);
    result.push(valuesArr[0]);
};

//export result
module.exports = result;