function gerarTabuada() {
    var numero = document.getElementById('numero').value
    var tabuada = document.getElementById('tabuada')

    if (numero == ''){
        alert('Por favor, insira um número para gerar a tabuada.')
    }
    
    for (var i = 0; i <= 10; i++) {
        var resultado = numero * i
        var option = document.createElement('option')
        option.text = `${numero} x ${i} = ${resultado}`
        tabuada.appendChild(option)
    }
}