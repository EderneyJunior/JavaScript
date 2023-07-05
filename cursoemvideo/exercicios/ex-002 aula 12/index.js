function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    var img = document.getElementById('img')

    if (fano.value.length == 0 || ano < Number(fano.value)) {
        alert('[ERRO!], verifique os dados e tente novamente.')
    } else {
        var sex = document.getElementsByName('radiosx')
        var idade = ano - Number(fano.value)
        var genero = ''

        if (sex[0].checked) {
            genero = 'masculino'
        } else if (sex[1].checked) {
            genero = 'feminino'
        }

        if (genero == 'masculino') {
            if (idade <= 10) {
                img.setAttribute('src', 'imagens/criança-masc.png')
            } else if (idade <= 25) {
                img.setAttribute('src', 'imagens/jovem-masc.png')
            } else if (idade < 55) {
                img.setAttribute('src', 'imagens/homem.png')
            }else {
                img.setAttribute('src', 'imagens/idoso.png')
            }
        } else {
            if (idade <= 10) {
                img.setAttribute('src', 'imagens/criança-fem.png')
            } else if (idade <= 25) {
                img.setAttribute('src', 'imagens/jovem-fem.png')
            } else if (idade < 55) {
                img.setAttribute('src', 'imagens/mulher.png')
            }else {
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }

        res.innerHTML = `<p>Você é uma pessoa do genêro ${genero} e tem ${idade} anos.</p>`
        res.appendChild(img)
    }
}