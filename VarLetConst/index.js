/*
    Vamos entender variáveis
    Variáveis são "recipientes" onde podemos armazenar informações que 
    podem variar, ou seja, podem ter qualquer tipo de valo.

    No JavaScript temos 3 palavras-chaves para declarar variáveis:
    --> Var
    --> Let
    --> Const
 */

// ******** VAR *********** (Universal) (Não é mais usual)


    // Pode reatribuir os valores, podendo usar em qualquer parte do código 

// // Firt Example

// var a = 2;
// var b = 3;
// var c = a + b;
// console.log(c);

// var d, e, f; // Declaration Variables (Start udenfined)   

// // Values Assignment
// d = 2;
// e = 3;
// f = d + e;

// console.log(f);


// // Second Example

// var nome, sobrenome, nomeCompleto, idade; // Declaração das variáveis

// // Atribuição dos valores

// nome = 'Bruno';
// sobrenome = 'Willian';
// idade = 18;
// nomeCompleto = `${nome}  ${sobrenome}` // Contatenação

// pessoa = `${nomeCompleto} possui ${idade} anos!`

// document.getElementById("texto").innerHTML = pessoa;


// *********** LET ************

// // Não permite a redeclaração com a palavra LET novamente
// let pessoa = 'Bruno';
// let pessoa = 'João';
// console.log(pessoa); // ERROR

// // Redeclaração da variável sem a palavra LET
// let nome = 'Willian';
// nome = 'Murilo';
// console.log(nome); // Murilo

// Variável Bloco (Using VAR)
var x = 10; // Here is 10
console.log(x)

{
    var x = 2; // Here is 2
}

// Here is 2

console.log(x);

// Variável Bloco (Using LET)

let y = 20; // Aqui é 20

{
    let y = 1; // Aqui é 1 (Essa varável só funcionará dentro desse bloco, se for usar a declaração LET)
}

// Aqui é 20
console.log(y);

// ************ Const **************

// Ela nunca mudará, sempre será constante a variável

// Variável Bloco (Using CONST)

const z = 20;

{
    const z = 1;
    console.log(`O valor de z dentro do Bloco de códigos ${z}`) // Valor único dentro desse código
}

console.log(`O valor de z é ${z}`);