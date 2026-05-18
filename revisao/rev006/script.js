function calcular() {
    const amostra1 = parseFloat(window.document.getElementById('amostra1').value)
    const amostra2 = parseFloat(window.document.getElementById('amostra2').value)
    const amostra3 = parseFloat(window.document.getElementById('amostra3').value)
    const resultado = window.document.getElementById('resultado')
    const botao = window.document.getElementById('calcular')

    var media = (amostra1 + amostra2 + amostra3) / 3

    if (isNaN(media)) {
        resultado.innerHTML = "Por favor, insira valores válidos."
    } else if (media < 15) {
        resultado.innerHTML = `Média: ${media.toFixed(2)} - Abaixo do ideal`
        resultado.style.backgroundColor = '#ffc107'
        resultado.style.color = '#000'
    } else if (media >= 15 && media <= 25) {
        resultado.innerHTML = `Média: ${media.toFixed(2)} - Umidade Ideal`
        resultado.style.backgroundColor = '#28a745'
        resultado.style.color = '#fff'
    } else {
        resultado.innerHTML = `Média: ${media.toFixed(2)} - Solo Encharcado`
        resultado.style.backgroundColor = '#0dcaf0'
        resultado.style.color = '#fff'
    }
}   