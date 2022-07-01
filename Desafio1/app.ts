/* Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John";*/

//Primeiro jeito: por inferência:
let employee = {
    code: 10,
    name: 'John'
}

console.log(employee);

//Segundo jeito: tipar antecipadamente:
let employee2:{code: number, name: string} = {
    code: 10,
    name: 'John'
}

console.log(employee2);

//Terceiro jeito: utilizando interface:
interface Employee{
    code: number,
    name: string
}

let employee3: Employee = {
    code: 10,
    name: 'John'
}

console.log(employee3);