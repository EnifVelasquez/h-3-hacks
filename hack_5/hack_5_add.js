/**
* agregar al objeto result la propiedad role 
* 
* 
* output => {
    id:100,
    name:"foo",
    role:"admin"
};
*/
let result = {
    id:100,
    name:"foo",
};
let role = "admin";

Object.defineProperty(result, "role", {
    value: role,
    writable: true,
    enumerable: true,
    configurable: true
  });

//export result
module.exports = result; 