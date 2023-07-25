/* OBJETOS
Objetos são basicamente variáveis com muitos valores dentro.

Ex: const carro =  {marca: "ford", modelo: "ka", ano: 2015}

*/

let carro = "ford"; // Variável

// Criando um Objeto:

const car = { // Se usa const, pois o objeto não pode mudar ou ser redeclarado. (Não recomendado usar var or let)
    // Atributos do Objeto Car
    marca: "ford",
    modelo: "ka",
    ano: 2015,
    placa: "ABC-1234",
    // Criando um método
    buzina: function() {alert('Biiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')}, // Não precisa de nome, pois o nome já está atrelado ao nome do método (Function Anônima  )
    completo: function() {
        return `A marca é ${this.marca}, seu modelo é ${this.modelo}, o ano do carro é ${this.ano}, e sua placa é ${this.placa}`
        // A palavra this faz referência ao objeto chamado
    }
};

// car.buzina();
console.log(car.marca);
console.log(car.ano);
console.log(car.completo());