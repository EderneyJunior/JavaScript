function carregar() {
    var titulo = document.getElementsByTagName('h1')[0]
    var msg = document.getElementsByTagName('p')[0]
    var imagem = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >=5 && hora < 12) {
        titulo.innerHTML = 'Bom dia!'
        imagem.src = 'imagens/manhã.jpg'
        document.body.style.background = 'rgb(233, 176, 110)'
    }else if (hora >= 12 && hora < 18) {
        titulo.innerHTML = 'Boa tarde!'
        imagem.src = 'imagens/tarde.jpg'
        document.body.style.background = 'rgb(253, 209, 48)'
    }else if (hora >= 18 || hora < 5) {
        titulo.innerHTML = 'Boa noite!'
        imagem.src = 'imagens/noite.jpg'
        document.body.style.background = 'rgb(0, 34, 72)'
    }
}


