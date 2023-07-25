/*
    Vamos entender Operadores:
    --> Os operadores JavaScript são usados para atribuir valores, comparar valores, executar operações aritméticas e muito mais.

    São os sinais que usamos: + - * / = ++ -- +=  -=  && || etc;

    São separados em 6 "Categorias": 
    1) Operadores Aritméticos (Matemáticos)
    2) Operadores de Atribuição 
    3) Operadores de Sequência
    4) Operadores de Comparação
    5) Operador Condicional (Ternário)
    6) Operadores Lógicos
*/

// Operadores Matemáticos

// var valor1, valor2, total;
// valor1 = 5;
// valor2 = 2;
// total = valor1 + valor2; // Operador Matemático
// total1 = valor1 - valor2; // Operador Matemático
// total2 = valor1 / valor2; // Operador Matemático
// total = ++valor1; // valor1 = valor1 + 1 
// console.log(total); // 6
// total = --valor1; // valor1 = valor1 - 1
// console.log(total); // 4


// Operadores de Atribuição

// var valor1, valor2, total;
// valor1 = 5;
// valor2 = 2;

// valor1 = valor1 + valor2; // Para não repetir o valor1
// valor1 += valor2;  // Mesma coisa que a linha de Código a cima
// valor1 = valor1 - valor2; // Para não repetiro o valor1
// valor1 -= valor2; // Mesma coisa que a linha de Código a cima
// valor1 = valor1 * valor2;
// valor1 *= valor2;
// // Assim para todos os Operadores Matemáticos
// console.log(valor1);


// Operadores de Sequência

// var valor1, valor2, total;
// valor1 = 'Bruno';
// valor2 = 'Willian';
// total = valor1 + valor2;
// console.log(total);
// console.log(`${valor1} ${valor2}`)


// Operadores de Comparação

// var valor1, valor2, total1, total;
// valor1 = 8;
// valor2 = "20";

// // total = valor1 == valor2;
// // total1 = valor1 === valor2; // True or False 
// total = valor1 != "8"; // Type and Number

//     // == Verifica apenas o Number
//     // === Verifica o Type e o Number

// /*
//  Maior >
//  Menor <
//  Maior igual >=
//  Menor igual <=
//  */
// console.log(total); // True
// console.log(total1); // False (Pois o tipo é diferente, mesmo sendo o mesmo número. Number é diferente de String)

// Operador Condicional (Ternário) e Comparação

var idade, eleitor, resultado;
idade = 65;

eleitor = (idade < 18) ? "Menor de Idade. Não Eleitor" : "Maior de Idade. Eleitor";
            // condição? valor se for verdareiro : valor se for falso

// resultado = (idade > 60 && idade < 70); // && -> E

// resultado = (idade === 65 || idade === 72); // || -> Ou

resultado = !(idade === 65); // ! -> Negação. Return o valor ao contrário que dará na condição. False
console.log(eleitor);
console.log(resultado);