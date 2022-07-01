# Desafio-DIO-TypeScript
Desafio de Projeto TypeScript

Este repositório contém a resolução dos desafios propostos sobre TypeScript

## Desafio 1:
O desafio foi resolvido de três maneiras diferentes:
1. Atribuição de tipos por inferência;
2. Atribuição antecipada dos tipos;
3. Utilizando Interface.

## Desafio 2:
Pontos importantes a serem citados durante a resolução:
1. Criado uma interface que contém todas as propriedades de Pessoa(nome, idade e profissão) com seus respectivos tipos;
2. Criado um enum com as profissões, já que existem apenas duas (atriz e padeiro).

## Desafio 3:
Pontos importantes a serem citados durante a resolução:
1. Atribuído 'as HTMLInputElement' à variável 'soma';
2. Para todos os itens que poderiam ser nulos, foi utilizado um 'if';
3. Na função 'somarSaldo' o tipo do parâmetro passado é number
4. Como a tag input retorna uma string, para operação '+' não resultar erroneamente em uma concatenação, o texto contido nela foi convertido em number. E após feita a soma, foi convertido em string novamente.

