//console.log('Hello');
//window.alert("isso é um alerta");
// comentario
let divNome = document.getElementById("divNome");
let butao1 = document.getElementById("butao1");
    butao1.onclick = function(){
    divNome.style.display = "block";
}

let nomes = [];

let enviar = document.getElementById("enviar");
let nomedapessoa = document.getElementById("idNome");
    enviar.onclick = function(){
        nomes.push(nomedapessoa.value);
        console.log(nomes);
    }
