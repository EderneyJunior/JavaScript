let num = document.getElementById('txtn')
let lista = document.getElementById('selnum')
let res = document.getElementById('res')
let valores = []

 function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    for (c in l) {
        if (l[c] == n) {
            return false
        }
    }
    return true
}

function add() {
    if (isNum(num.value) && inLista(num.value, valores)) {

        valores.push(Number(num.value))
        let item = document.createElement('option')

        item.text = `Valor ${Number(num.value)} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        alert('Valor inválido ou já encontrado na lista.')
    }

    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores para finalizar!')
    } else {
        let maior = valores[0]
        let menor = valores[0]
        let tot = valores.length
        let soma = 0
        let media = 0

        for (let c in valores) {
                soma += valores[c]
                if (valores[c] > maior) {
                    maior = valores[c]
                }
                if (valores[c] < menor) {
                    menor = valores[c]
                }
            }

            media = soma / tot
            res.innerHTML = ''
            res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
            res.innerHTML += `<p>O maior número inserido foi ${maior}</p>`
            res.innerHTML += `<p>O menor número inserido foi ${menor}</p>`
            res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
            res.innerHTML += `<p>A média da soma entre os valores foi ${media}</p>`
        }
}