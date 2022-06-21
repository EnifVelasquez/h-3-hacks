/**
* en result, reflejar con un objeto literal, la integración
* de los datos en un sola estructura
*
* 1) la propiedad name, modificar el valor a capital
* 2) la propiedad roles, implementar en 1 array con los items en mayúscula
* 3) la prapiedad skills, solo los items HTML y CSS van en mayúscula, del resto en capital
* 4) la porpiedad levels, transformar los valores de l-1 en L1
*  
*
* output => {
    id:100,
    name:"Foo",
    roles:["ADMIN","SUPER_USER","USER"],
    skills:["Git","Github","Javascript","HTML","CSS","Docker","Python","Flask","React","Redux","Deploy"],
    levels:[{LEVEL:"L1"},{LEVEL:"L2"}, {LEVEL:"L3"}]
}
*/
let foo = {
    id:100,
    name:"foo",
    roles:["admin"],
    skills:["javascript","html","css","python","flask","react","redux"],
    alias:"super alias"
};
let roleSuperUser = "SUPER_USER";
let roleUser = "USER";
let skills = ["git","github","docker","deploy"];
let levels = [{LEVEL:"l-1"},{LEVEL:"l-2"},{LEVEL:"l-3"}];
let result;
let skillsNew;
//Modificando name
foo.name = foo.name.charAt(0).toUpperCase() + foo.name.slice(1);

//modificando roles
let fooRoles = foo.roles.map(function(letra) {
    return letra.toUpperCase();
    });

fooRoles.push(roleSuperUser, roleUser);

foo.roles= fooRoles;

//creando el nuevo array de skills
skillsNew= foo.skills.map(function(skill){
    if (skill=="html") {return skill.toUpperCase();}
    if (skill=="css") {return skill.toUpperCase();}
    else return skill.charAt(0).toUpperCase() + skill.slice(1);
});

let skillsII = skills.map(function(letra) {
    return letra.charAt(0)
                .toUpperCase() + letra.slice(1);
    });

skillsNew.unshift(skillsII[0],skillsII[1]) + skillsNew.splice(5,0,skillsII[2]) + skillsNew.push(skillsII[3]);


foo.skills = skillsNew;

//Modificando values
let levelsNew=[];
let valuesArr;
let arrObject;

for (let i = 0; i < levels.length; i++) {
    arrObject = levels[i];
    valuesArr = Object.values(arrObject);
    levelsNew.push(valuesArr[0].charAt(0).toUpperCase() + valuesArr[0].slice(2));
};

for (let i = 0; i < levels.length; i++) {
    arrObject = levels[i];
    levels[i].LEVEL =levelsNew[i];
};

foo.levels=levels;
//foo=result
result = Object.assign(foo);
delete result.alias;


//export result
module.exports = result; 