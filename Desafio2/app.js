"use strict";
/*Como podemos melhorar o esse código usando TS?
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}*/
var profissao;
(function (profissao) {
    profissao[profissao["Atriz"] = 0] = "Atriz";
    profissao[profissao["Padeiro"] = 1] = "Padeiro";
})(profissao || (profissao = {}));
let pessoa1 = {
    nome: 'Maria',
    idade: 29,
    profissao: profissao.Atriz
};
let pessoa2 = {
    nome: 'Roberto',
    idade: 19,
    profissao: profissao.Padeiro
};
let pessoa3 = {
    nome: 'Laura',
    idade: 29,
    profissao: profissao.Atriz
};
let pessoa4 = {
    nome: 'Carlos',
    idade: 19,
    profissao: profissao.Padeiro
};
console.log(pessoa1, pessoa2, pessoa3, pessoa4);
