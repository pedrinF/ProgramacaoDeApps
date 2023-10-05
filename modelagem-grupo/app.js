const username = document.getElementById('username')
const senha = document.getElementById('senha')
const login = document.querySelector('.login-button')
const cadastro = document.querySelector('.signin-box')
const cadastrar = document.getElementById('signin-button')

const logins = []

function showCadastro() {
    if(cadastro.style.display = 'none'){
        cadastro.style.display = 'flex'
    } else {
        cadastro.style.display = 'none'
    }
}
function execLogin(){
    if(logins.includes(username)){
        alert('Bem vindo!')
    } else {
        alert('Cadastro não realizado, favor cadastrar-se.')
    }
}