var vetorNumeros = []
var resultado = document.getElementById('resultado')

function adicionar() {
    let numero = document.querySelector('input#numero')
    let quadroNumeros = document.getElementById('quadroNumeros')

    if(numero.value <= 0 || numero.value > 100 || numero.value == ''){
        window.alert('Insira um número válido!')
        return
    }

    if(vetorNumeros.includes(numero.value)){
        window.alert('Número já adicionado anteriormente!')
    } else {
        let option = document.createElement('option')
        option.text = `Valor ${numero.value} adicionado.`
        quadroNumeros.appendChild(option)
        vetorNumeros.push(Number(numero.value))
        resultado.innerHTML = ''
    }

    numero.value = ""
    numero.focus()
}

function finalizar(){
    if(vetorNumeros.length == 0){
        window.alert('Adicione números primeiro!')
        return
    } 

    resultado.innerHTML = ''
    vetorOrdenado = vetorNumeros.toSorted((a, b) => a - b)

    let somaTodosValores = 0;
    for(let i = 0; i < vetorNumeros.length; i++){
        somaTodosValores += parseInt(vetorNumeros[i])
    }

    resultado.innerHTML += `<p>Ao todo, temos ${vetorNumeros.length} números cadastrados.</p>`
    resultado.innerHTML += `<p>O maior valor informado foi ${vetorOrdenado[vetorOrdenado.length - 1]}.</p>`
    resultado.innerHTML += `<p>O menor valor informado foi ${vetorOrdenado[0]}.</p>`
    resultado.innerHTML += `<p>Somando todos os valores, temos ${somaTodosValores}.</p>`
    resultado.innerHTML += `<p>A média dos valores digitados é ${(somaTodosValores/vetorNumeros.length).toFixed(2)}</p>`
}