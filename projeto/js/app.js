const chave = '8d0a9ba1c5e29647039e9d016f74f338'

const cidade = document.querySelector('.input-cidade')
const botao = document.querySelector('.botao-busca')
const nome = document.querySelector('.cidade')
const temp = document.querySelector('.temp')
const previsao = document.querySelector('.texto-previsao')


botao.addEventListener('click', procurar)

async function procurar() {
    let ncidade = cidade.value

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ncidade}&appid=${chave}&units=metric&lang=pt_br`)
    .then(resposta => resposta.json())

    nome.textContent = "Tempo em "+dados.name
    temp.textContent = (dados.main.temp).toFixed(0)+"°C"
    previsao.textContent = (dados.weather[0].description)

    console.log(dados)
}


