function verificar() {
    var anoNascimento = parseInt(window.document.getElementById('anoNascimento').value)
    var sexo = window.document.getElementsByName('sexo')
    var resultado = window.document.querySelector('div#resultado')
    var dataAtual = new Date()
    var anoAtual = dataAtual.getFullYear()
    var idade = anoAtual - anoNascimento

    if (anoNascimento.length == 0 || anoNascimento > anoAtual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'imagens/Mcrianca.jpg')
            } else if (idade >= 12 && idade < 21) {
                img.setAttribute('src', 'imagens/Mjovem.jpg')
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src', 'imagens/Madulto.jpg')
            } else {
                img.setAttribute('src', 'imagens/Midoso.jpg')
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'imagens/Fcrianca.jpg')
            } else if (idade >= 12 && idade < 21) {
                img.setAttribute('src', 'imagens/Fjovem.jpg')
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src', 'imagens/Fadulta.jpg')
            } else {
                img.setAttribute('src', 'imagens/Fidosa.jpg')
            }
        }

        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img)
    }
}