/* ARRAYS
Os arrays JavaScript são usados para armazenar váriop valores em uma única variável. Diferente dos objetos, que funcionam com propriedades ou "nomes" que você dá para os itens dentro dele, os 
arrays não possuem propriedades. O item dentro dele é encontrado pela posição.

Imageine um array como uma lista de intens, com controle, por ordem de posição dentro dele.

Ex: const lista = ["arroz", "feijão", "macarrão", "leite"];

A lista[0] (lista na posição 0) vai conter o valor "arroz".
A lista[1] (lista na posição 1) vai conter o valor "feijão".
E assim por diante.
*/

// Without array

// var item1 = "Arroz";
// var item1 = "Feijão";
// var item1 = "Macarrão";
// var item1 =  "Leite";

// With Array

// const lista = ["Arroz", "Feijão", "Macarrão", "Leite"];
// console.log(lista[0]);

const pessoa = ["Bruno", "Willian", 18]; // Array

const person = { // Object
    name: "Bruno",
    sobrenome: "Willian",
    idade: 18
};

// Mostrando Array
console.log(pessoa[0]);
// Monstrando Object
console.log(person.sobrenome);
console.log(pessoa.length);
console.log(pessoa[pessoa.length -1]); // Mostra o último valor do Array 
pessoa.push("Brasileiro"); // Acrescenta um valor ao final do Array
console.log(pessoa);


// Como adicionar valores em um Array

// Primeira Maneira -> Using push
const cars = ["BMW", "FORD", "FERRARI"];
console.log(cars); //[ 'BMW', 'FORD', 'FERRARI' ]
cars.push("LAMBO");
console.log(cars); //[ 'BMW', 'FORD', 'FERRARI', 'LAMBO' ]

// Segunda Forma -> Using cars[number]

cars[4] = "DODGE";
console.log(cars); // [ 'BMW', 'FORD', 'FERRARI', 'LAMBO', 'DODGE' ]

// Como saber se uma variável é uma matriz -> Using method isArray

console.log(Array.isArray(pessoa)); // True -> Array
console.log(Array.isArray(person)); // False -> Object  