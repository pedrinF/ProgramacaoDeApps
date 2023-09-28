function calculaIMC(){
    const peso = parseFloat(document.getElementById("peso").value)
    const altura = parseFloat(document.getElementById("altura").value)
    const resultado = document.getElementById("resultado")
    const imc = peso/(altura*altura)
    const imcf = imc.toFixed(3)

    if (imc < 18.5){
        resultado.textContent = "IMC: " +imcf+ ".Classificação: abaixo do peso."
    } else if( imc >= 18.5 && imc < 25){
        resultado.textContent = "IMC: " +imcf+ ". Classificação: peso ideal."
    } else if(imc >= 25 && imc < 30){
        resultado.textContent = "IMC: " +imcf+ ". Classificação: sobrepeso."
    } else if(imc >= 30 && imc <35){
        resultado.textContent = "IMC: " +imcf+ ". Classificação: Obesidade I."
    } else if(imc >= 35 && imc <40){
        resultado.textContent = "IMC: " +imcf+ ". Classificação: Obesidade 2."
    } else {
        resultado.textContent = "IMC: " +imcf+ ". Classificação: Obesidade Morbida."
    }
}
