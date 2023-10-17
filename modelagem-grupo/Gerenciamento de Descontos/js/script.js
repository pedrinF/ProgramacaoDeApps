const nomeProduto = document.querySelector("#nomeProduto")
const dataFinal = document.querySelector("#dataFinal")
const resultado = document.querySelector("#resultado")
const botao = document.querySelector("#botao")
const preco = document.querySelector("#precoProduto")
const desconto = document.querySelector("#valorDesconto")
const descontoPercentual = document.querySelector("#percentual")
const descontoFixo = document.querySelector("#valorFixo")
const descontoQnt = document.querySelector("#quantidade")

botao.addEventListener("click", verificar)

function verificar() {
    let dataAtual = new Date()
    let finalData = new Date(dataFinal.value)
    let precoProduto = Number(preco.value)
    let valorDesconto = Number(desconto.value)
    let descontoAplicado = 0
    let precoFinal = 0
    
    if (finalData >= dataAtual) {

        if (descontoPercentual.checked) {
            descontoAplicado = (precoProduto * valorDesconto) / 100
        } else if (descontoFixo.checked) {
            descontoAplicado = valorDesconto
        }

        precoFinal = precoProduto - descontoAplicado;

        resultado.textContent = "O desconto é válido. Preço final = " + precoFinal + " R$"
    } else {
        resultado.textContent = "O desconto não é válido. A data final do desconto expirou."
    }
}

