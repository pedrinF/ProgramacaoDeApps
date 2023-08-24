//dom

const lampada = document.querySelector("#lampada")
const acender = document.querySelector("#on")
const apagar = document.querySelector("#off")
var num = 0

//evento

acender.addEventListener('click', ligaLuz)
apagar.addEventListener('click', apagaLuz)

//funcao

function ligaLuz() {
    lampada.src = "images/acesa.gif"
    num +=1
    if (num == 4){
        lampada.src = "images/quebrada (1).jpg"
    }
}
function apagaLuz() {
    lampada.src = "images/apagada (1).gif"
}