function gerarRelatorio() {
    var indiceEstabilidade = Number(document.getElementById('estInicial').value)
    var dias = document.getElementById('dias').value
    var tipoSolo = document.getElementsByName('solo')
    var resultado = document.getElementById('resultado')
    var data = new Date()
    var hora = data.getHours()

    if (indiceEstabilidade === '' || indiceEstabilidade < 0 || indiceEstabilidade > 100 || dias === '' || dias <= 0) {
        alert('Preencha todos os campos corretamente!')
        return
    } else {
        if (hora >= 0 && hora < 12) {
            resultado.innerHTML = `<b>Bom dia! Relatório gerado:</b>`
        } else if (hora >= 12 && hora < 18) {
            resultado.innerHTML = `<b>Boa tarde! Relatório gerado:</b>`
        } else {
            resultado.innerHTML = `<b>Boa noite! Relatório gerado:</b>`
        }
    }

    var perdaDiaria = 0
    if (tipoSolo[0].checked) {
        perdaDiaria = 5
    } else {
        perdaDiaria = 2
    }

    for (let i = 1; i <= dias; i++) {
        var p = document.createElement('p')

        if (indiceEstabilidade < 50){
            p.className = 'alerta'  
        }
            
        if (indiceEstabilidade <= 0) {
            p.innerHTML = `Dia ${i}: Estabilidade em ${indiceEstabilidade}<br>`
            resultado.appendChild(p)
            break
        }

        p.innerHTML = `Dia ${i}: Estabilidade em ${indiceEstabilidade}<br>`
        resultado.appendChild(p)
        indiceEstabilidade -= perdaDiaria
    }

    if (indiceEstabilidade >= 50) {
        resultado.style.backgroundColor = 'green'
    } else {
        resultado.style.backgroundColor = 'purple'
    }
}