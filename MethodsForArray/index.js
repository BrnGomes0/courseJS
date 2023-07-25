// Métodos de Array
const guys = ["Bruno", "Beck", "Raphael", "Luizinho"];

console.log(guys.join(" * ")); // Separador dos itens do Array

// Remover o último value de um Array

guys.pop(); // Remove o último value
console.log(guys); // [ 'Bruno', 'Beck', 'Raphael' ]

// Adicionar um item ao final de um Array

guys.push("Aprigio");
console.log(guys); // [ 'Bruno', 'Beck', 'Raphael', 'Aprigio' ]
guys[4] = "João"
console.log(guys); // [ 'Bruno', 'Beck', 'Raphael', 'Aprigio', 'João' ]

// Removendo o primeiro item de um Array

guys.shift();
console.log(guys); // [ 'Beck', 'Raphael', 'Aprigio', 'João' ] --> Bruno saiu, então os índices foram alterados


// Adicionando um item ao início de um Array

guys.unshift("OLIVEIRA");
console.log(guys); // [ 'OLIVEIRA', 'Beck', 'Raphael', 'Aprigio', 'João' ]

// Removendo um item do Array com delete

console.log(guys);
// [ 'OLIVEIRA', 'Beck', 'Raphael', 'Aprigio', 'João' ]
//       0         1         2          3         4
console.log(guys[0]) // OLIVEIRA
delete guys[0]; // O method delete remove um valor escolhido, mas não altera o indíce, deixando um empty item no Array
console.log(guys); // [ <1 empty item>, 'Beck', 'Raphael', 'Aprigio', 'João' ]

// Escolhendo a posição para adicionar o item em um array

guys.splice(1, 0, "ItemAdicionado1", "ItemAdicionado2");
// splice(indice, deleteCount, elementsChosen)
console.log(guys); 
/*
[
  <1 empty item>,
  'ItemAdicionado1',
  'ItemAdicionado2',
  'Beck',
  'Raphael',
  'Aprigio',
  'João'
]
*/

// Juntar vários arrays

const lista1 = ["Arroz", "Feijão", "Leite", "Macarrão"];
const lista2 = ["Suco", "Refrigerante", "Carne"];
const superLista = lista1.concat(lista2);
console.log(superLista); 
/*
[
  'Arroz',
  'Feijão',
  'Leite',
  'Macarrão',
  'Suco',
  'Refrigerante',
  'Carne'
]

*/

const lista3 = ["Salgadinho", "Vinho"];
const superListaSupreme = lista1.concat(lista2, lista3);
console.log(superListaSupreme);

/*
[
  'Arroz',
  'Feijão',
  'Leite',
  'Macarrão',
  'Suco',
  'Refrigerante',
  'Carne',
  'Salgadinho',
  'Vinho'
]
*/

// Fatiamento de Array

const players = [
    "Biro Biro", // Index = 0
    "Ribamar", // Index = 1
    "Pelé", // Index = 2
    "Maradona", // Index = 3
    "Neymar", // Index = 4
    "Cristiano Ronaldo", // Index = 5
    "Vampeta", // Index = 6
    "Dimitre", // Index = 7
    "Bruno" // Index = 8
];

const craques = players.slice(2, 6);
console.log(craques); // [ 'Pelé', 'Maradona', 'Neymar', 'Cristiano Ronaldo' ]


// Colocando um Array in Ordem Alfabética

const jogOrdem = players.sort(); // Method para colocar em ordem alfabética (sort - Method - Only Text)
console.log(jogOrdem);
/*
[
  'Biro Biro',
  'Bruno',
  'Cristiano Ronaldo',
  'Dimitre',
  'Maradona',
  'Neymar',
  'Pelé',
  'Ribamar',
  'Vampeta'
]
*/

// Mostrando na ordem inversa -> Using Reverse
    // Para mostrar em ordem inversa a alfabética, é preciso PRIMEIRO colocar em OrdemAlfabética

console.log(players.reverse());

/*
[
  'Vampeta',
  'Ribamar',
  'Pelé',
  'Neymar',
  'Maradona',
  'Dimitre',
  'Cristiano Ronaldo',
  'Bruno',
  'Biro Biro'
]
*/


const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort(function(a, b) {return a-b}); // Hack para mostrar em ordem correta (Crescente)
numbers.some(function(a,b) {return b-a}); // Hack para mostrar em ordem correta (Decrescente) 

// Pegando o valor máximo de um array

function maiorNumber (array) {
    return Math.max.apply(null, array);
}

console.log(maiorNumber(numbers)); // 100

// Pegando o valor minímo de um array
function menorNumber (array) {
    return Math.min.apply(null, array);
}


console.log(menorNumber(numbers)); // 1 

// Numbers maiores do que 20

const maior20 = numbers.filter(filtragem); // Filter(function) -> Filtrar algo

function filtragem (value, index, array) {
    return value > 20;
}

console.log(maior20); // [ 25, 40, 100 ]