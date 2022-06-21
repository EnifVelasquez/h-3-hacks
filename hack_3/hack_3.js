/**
* mediante el loop while agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [1,3,5]
*/
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];
let arrLenght = arr.length;
let valuesArr;
let arrObject;
let i = 0;

while (i < arrLenght){
    arrObject = arr[i];
    valuesArr = Object.values(arrObject);

    if (valuesArr[0] % 2 != 0)result.push(valuesArr[0]);
    
    i++;
}
//export result
module.exports = result; 