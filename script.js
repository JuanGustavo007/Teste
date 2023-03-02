let funcionarios = [
    {
        dia: 1,
        valor: 22174.1664,
    },
    {
        dia: 2,
        valor: 24537.6698,
    },
    {
        dia: 3,
        valor: 26139.6134,
    },
    {
        dia: 4,
        valor: 0.0,
    },
    {
        dia: 5,
        valor: 0.0,
    },
    {
        dia: 6,
        valor: 26742.6612,
    },
    {
        dia: 7,
        valor: 0.0,
    },
    {
        dia: 8,
        valor: 42889.2258,
    },
    {
        dia: 9,
        valor: 46251.174,
    },
    {
        dia: 10,
        valor: 11191.4722,
    },
    {
        dia: 11,
        valor: 0.0,
    },
    {
        dia: 12,
        valor: 0.0,
    },
    {
        dia: 13,
        valor: 3847.4823,
    },
    {
        dia: 14,
        valor: 373.7838,
    },
    {
        dia: 15,
        valor: 2659.7563,
    },
    {
        dia: 16,
        valor: 48924.2448,
    },
    {
        dia: 17,
        valor: 18419.2614,
    },
    {
        dia: 18,
        valor: 0.0,
    },
    {
        dia: 19,
        valor: 0.0,
    },
    {
        dia: 20,
        valor: 35240.1826,
    },
    {
        dia: 21,
        valor: 43829.1667,
    },
    {
        dia: 22,
        valor: 18235.6852,
    },
    {
        dia: 23,
        valor: 4355.0662,
    },
    {
        dia: 24,
        valor: 13327.1025,
    },
    {
        dia: 25,
        valor: 0.0,
    },
    {
        dia: 26,
        valor: 0.0,
    },
    {
        dia: 27,
        valor: 25681.8318,
    },
    {
        dia: 28,
        valor: 1718.1221,
    },
    {
        dia: 29,
        valor: 13220.495,
    },
    {
        dia: 30,
        valor: 8414.61,
    },
];

let somenteValores = funcionarios.map((i) => {
    return i.valor;
});

let somenteDias = funcionarios.map((i) => {
    return i.dia;
});

//Calculando o menor valor
console.log("Menor valor " + Math.min(...somenteValores));

//Calculando o maior valor
console.log("Maior valor " + Math.max(...somenteValores));

//encontrando o numero de dias
//console.log(somenteDias.length);

//total
let total = somenteValores.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
}, 0);
// console.log(total);

//Numero de dias que o total foi maior
let diasMaiores = funcionarios.filter((item) => {
    if (item.valor >= total) {
        return item;
    }
});

console.log(
    "Número de dias no mês em que o valor de faturamento diário foi superior à média mensal" +
        diasMaiores +
        diasMaiores.length
);

//4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
/*

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

*/
let estados = [
    {
        estado: "sp",
        valor: 67836.43,
    },
    {
        estado: "rj",
        valor: 36678.66,
    },
    {
        estado: "mg",
        valor: 29229.88,
    },
    {
        estado: "es",
        valor: 27165.48,
    },
    {
        estado: "outros",
        valor: 19849.53,
    },
];

let totalEstados = estados
    .map((item) => {
        return item;
    })
    .reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual.valor;
    }, 0);
console.log(totalEstados);

//5

let string = prompt("Digite uma palavra:");

let stringInvertida = "";

for (let i = string.length - 1; i >= 0; i--) {
    stringInvertida += string[i];
}

console.log(`A palavra invertida é: ${stringInvertida}`);
