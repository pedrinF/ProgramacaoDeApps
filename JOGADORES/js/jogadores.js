const jogador = document.querySelector("#jogadores")
const ney = document.querySelector("#neymar")
const cr7 = document.querySelector("#cr7")
const mes = document.querySelector("#messi")
const hal = document.querySelector("#halaand")
const mba = document.querySelector("#mbappe")
const dyb = document.querySelector("#dybala")
const nome = document.querySelector("#nome")

ney.addEventListener('click', neymar)
cr7.addEventListener('click', cristiano)
hal.addEventListener('click', halaand)
mba.addEventListener('click', mbappe)
dyb.addEventListener('click', dybala)
mes.addEventListener('click', messi)

function neymar() {
    jogador.src = "images/neymar.webp"
    nome.textContent = "Neymar da Silva Santos Júnior"
}
function cristiano() {
    jogador.src = "images/cr7.jpg"
    nome.textContent = "Cristiano Ronaldo Dos Santos Aveiro"
}
function halaand() {
    jogador.src = "images/haaland.webp"
    nome.textContent = "Erling Braut Haaland"
}
function mbappe() {
    jogador.src = "images/mbappe.webp"
    nome.textContent = "Kylian Sanmi Mbappé Lottin"
}
function dybala() {
    jogador.src = "images/dybala.webp"
    nome.textContent = "Paulo Exequiel Dybala"
}
function messi() {
    jogador.src = "images/messi.jpg"
    nome.textContent = "Lionel Andrés Messi Cuccittini "
}

