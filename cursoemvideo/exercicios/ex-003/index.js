function contar() {
    var inicio = document.getElementById('in')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pass')
    var res = document.getElementById('res')
    var p =  document.getElementsByTagName('p')[4]

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        p.innerHTML = 'impossivel contar!'
    } else {
        p.innerHTML = `Contando:`

        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)

        if (passo == 0) {
            alert('Passo inválido, considerando passo 1')
            passo = 1
        }

        if (passo < 0) {
            passo *= -1
        }

        if (inicio < fim) {
            while(inicio <= fim) {
                res.innerHTML += `${inicio}🌽 `
                inicio += passo
            }
        } else {
            while (inicio >= fim) {
                res.innerHTML += `${inicio}🌽 `
                inicio -= passo
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}