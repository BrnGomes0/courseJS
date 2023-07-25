/* If and Else */

var hour = new Date().getHours();

if (hour < 12) {
    console.log("Good Morning!");
}else if (hour < 18) {
    console.log("Good Afternoon!");
}else{
    console.log("Good Nigth!");
}

// Return -> Good Afternoon

function verificar () {
    let nome = document.getElementById("name").value;
    if (nome == "" || nome == null) {
        let p = document.getElementById("texto");
        p.innerHTML = "O campo não pode ser vazio!";
        p.style.color = "red"; 
    }else {
        let p = document.getElementsById("texto");
        p.innerHTML = "Parabéns, tudo correto!"
        p.style.color = "blue";
    }
}