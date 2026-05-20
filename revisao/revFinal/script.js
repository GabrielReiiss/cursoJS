var codigoAnimal = []
var pesoAnimal = []
var relatorio = document.getElementById('relatorio')

function registrar(){
    let codBoi = document.querySelector('input#codigoBoi')
    let pesBoi = document.querySelector('input#pesoBoi')
    let listaAnimais = document.querySelector('select#listaAnimais')

    if(codBoi.value == '' || pesBoi.value == ''){
        window.alert('Preencha todas as informações!')
        return
    }

    if(codigoAnimal.includes(Number(codBoi.value))){
        window.alert('Animal já foi pesado nesse lote!')
    } else {
        let option = document.createElement('option')
        option.text = `Boi ${codBoi.value} pesou ${pesBoi.value} kg.`
        listaAnimais.appendChild(option)
        codigoAnimal.push(Number(codBoi.value))
        pesoAnimal.push(Number(pesBoi.value))
        relatorio.innerHTML = ''
        relatorio.style.display = ''
    }

    codBoi.value = ''
    pesBoi.value = ''
    codBoi.focus()
}

function gerarRelatorio(){
    var data = new Date()
    var hora = data.getHours()
    relatorio.innerHTML = ''

    if(pesoAnimal.length == 0 || codigoAnimal.length == 0){
        window.alert('Preencha as informações anteriores primeiro!')
    }

    relatorio.style.display = 'block'

    let pesoTotal = 0
    let maiorPeso = 0
    for(let i = 0; i < pesoAnimal.length; i++){
        if(pesoAnimal[i] > maiorPeso){
            maiorPeso = pesoAnimal[i]
        }

        pesoTotal += parseFloat(pesoAnimal[i])
    }

    if(hora <= 0 || hora < 12){
        relatorio.innerHTML += `<p><b>🔆 Relatório da manhã 🔆</b></p>`
    } else if (hora > 12 || hora < 18) {
        relatorio.innerHTML += `<p><b>🌄 Relatório da tarde! 🌄</b></p>`
    } else {
        relatorio.innerHTML += `<p><b>🌙 Relatório da noite! 🌙</b></p>`
    }

    relatorio.innerHTML += `<p><b>Total de animais: </b>${codigoAnimal.length}.</p>`
    relatorio.innerHTML += `<p><b>Peso total dos animais: </b>${pesoTotal.toFixed(2)} kg.</p>`
    relatorio.innerHTML += `<p><b>Média do peso dos animais: </b>${(pesoTotal/pesoAnimal.length).toFixed(2)} kg.</p>`
    relatorio.innerHTML += `<p><b>Animal mais pesado: </b>Boi: cod. ${codigoAnimal[pesoAnimal.indexOf(maiorPeso)]} - Peso: ${maiorPeso.toFixed(2)} kg.</p>`

    if(pesoTotal/pesoAnimal.length >= 300){
        relatorio.style.backgroundColor  = '#d4edda'
    } else {
        relatorio.style.backgroundColor = '#fff3cd'
    }
}