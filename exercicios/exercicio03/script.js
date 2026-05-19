function contar() {
    var inicio = parseInt(document.getElementById('inicio').value)
    var fim = parseInt(document.getElementById('fim').value)
    var passo = parseInt(document.getElementById('passo').value)
    var resultado = document.getElementById('resultado')

    if (isNaN(inicio) || isNaN(fim) || isNaN(passo)) {
        resultado.innerHTML = 'Por favor, preencha todos os campos corretamente.'
        return
    }

    if (passo <= 0) {
        window.alert('Passo inválido! Considerando PASSO 1')
        passo = 1
    }

    resultado.innerHTML = 'Contando: <br>'

    for (var i = inicio; i <= fim; i += passo) {
        resultado.innerHTML += `${i} \u{1F449} `
    }

    resultado.innerHTML += `\u{1F3C1}`
}