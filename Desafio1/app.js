"use strict";
/* Como podemos rodar isso em um arquivo .ts sem causar erros?

let employee = {};
employee.code = 10;
employee.name = "John";*/
//Primeiro jeito: por inferência:
let employee = {
    code: 10,
    name: 'John'
};
console.log(employee);
//Segundo jeito: tipar antecipadamente:
let employee2 = {
    code: 10,
    name: 'John'
};
console.log(employee2);
let employee3 = {
    code: 10,
    name: 'John'
};
console.log(employee3);
