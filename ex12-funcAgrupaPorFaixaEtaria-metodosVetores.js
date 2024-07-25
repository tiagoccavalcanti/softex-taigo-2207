/* Crie uma função chamada agruparPorFaixaEtaria que aceite um array de objetos representando pessoas. Cada objeto terá as propriedades nome (string) e idade (número). A função deve agrupar as pessoas em faixas etárias e retornar um objeto onde as chaves são as faixas etárias e os valores são arrays de nomes das pessoas que pertencem a cada faixa.

As faixas etárias são:
criança (0-12 anos)
adolescente (13-17 anos)
adulto (18-64 anos)
idoso (65 anos ou mais)

Entrada:
Um array de objetos, onde cada objeto tem as propriedades:
nome (string): o nome da pessoa.
idade (número): a idade da pessoa.

Exemplo de Entrada:
const pessoas = [
    { nome: 'Ana', idade: 10 },
    { nome: 'João', idade: 15 },
    { nome: 'Maria', idade: 30 },
    { nome: 'Carlos', idade: 70 },
    { nome: 'Beatriz', idade: 17 },
    { nome: 'Pedro', idade: 50 },
    { nome: 'Júlia', idade: 7 },
    { nome: 'Fernanda', idade: 65 }
];

Saída:
Um objeto contendo as faixas etárias como chaves e arrays de nomes como valores.

Exemplo de Saída:{
    crianca: ['Ana', 'Júlia'],
    adolescente: ['João', 'Beatriz'],
    adulto: ['Maria', 'Pedro'],
    idoso: ['Carlos', 'Fernanda']
} 
 */

const pessoas = [
    { nome: 'Ana', idade: 10 },
    { nome: 'João', idade: 15 },
    { nome: 'Maria', idade: 30 },
    { nome: 'Carlos', idade: 70 },
    { nome: 'Beatriz', idade: 17 },
    { nome: 'Pedro', idade: 50 },
    { nome: 'Júlia', idade: 7 },
    { nome: 'Fernanda', idade: 65 }
];

agruparPorFaixaEtaria(pessoas)

function agruparPorFaixaEtaria(pessoas){
    let criancas = pessoas.filter((pessoa) => pessoa.idade <= 12);
    let vetorCria = criancas.map((crianca) => crianca.nome);

    let adolescentes = pessoas.filter((pessoa) => pessoa.idade > 12 && pessoa.idade <= 17);
    let vetorAdolesc = adolescentes.map((adolescente) => adolescente.nome);

    let adultos = pessoas.filter((pessoa) => pessoa.idade > 17 && pessoa.idade <= 64);
    let vetorAdult = adultos.map((adulto) => adulto.nome);

    let idosos = pessoas.filter((pessoa) => pessoa.idade > 64);
    let vetorIdoso = idosos.map((idoso) => idoso.nome);

    let saida = [vetorCria , vetorAdolesc , vetorAdult , vetorIdoso];
    return saida;
}

console.log(agruparPorFaixaEtaria(pessoas))