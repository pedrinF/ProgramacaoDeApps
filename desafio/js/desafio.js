const zeroFill = n => {
    return ('0' + n).slice(-2);
}
const interval = setInterval(() => {
const data = new Date()
const dia = document.querySelector("#dia")
const mes = document.querySelector("#mes")
const ano = document.querySelector("#ano")
const hora = document.querySelector("#hora")
const minutos = document.querySelector("#minutos")
const segundos = document.querySelector("#segundos")
const saudacao = document.querySelector("#saudacao")

if (data.getHours() >= 5 && data.getHours() <= 12){
    saudacao.textContent = "Bom Dia!"
} else if (data.getHours() >= 13 && data.getHours() <= 17){
    saudacao.textContent = "Boa Tarde!"
} else {
    saudacao.textContent = "Boa Noite!"
}
dia.textContent = zeroFill(data.getDate())
mes.textContent = zeroFill(data.getMonth() + 1)
ano.textContent = data.getFullYear()
hora.textContent = zeroFill(data.getHours())
minutos.textContent = zeroFill(data.getMinutes())
segundos.textContent = zeroFill(data.getSeconds())
}, 1000)
