

const zeroFill = n => {
    return ('0' + n).slice(-2);
}
const interval = setInterval(() => {
const data = new Date()
const hora = document.querySelector("#hora")
const minutos = document.querySelector("#minutos")
const segundos = document.querySelector("#segundos")

hora.textContent = zeroFill(data.getHours())
minutos.textContent = zeroFill(data.getMinutes())
segundos.textContent = zeroFill(data.getSeconds())
}, 1000)





