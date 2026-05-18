function carregar() {
    var horaDoDia = window.document.getElementById('horaDoDia')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    horaDoDia.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        imagem.src = `imagens/manha.jpg`
        document.body.style.background = `#D9BF74`
    } else if (hora >= 12 && hora < 18) {
        imagem.src = `imagens/tarde.jpg`
        document.body.style.background = `#C2BA3D`
    } else {
        imagem.src = `imagens/noite.jpg`
        document.body.style.background = `#515154`
    }
}