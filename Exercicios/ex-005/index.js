let num = document.getElementById('txtn')
let selnum = document.getElementById('selnum')
let res = document.getElementById('res')
let valores = []

 function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function isLista(n, l) {
    for (c in l) {
        res = true
        if (l[c] == n) {
            res = false
        }
    }

    return res
}

function add() {
    if (isNum(num.value) && isLista(num.value, valores)) {
        let n = Number(num.value)
        let item = document.createElement('option')

        valores.push(n)
        item.text = `O numero ${n} foi adicionado.`
        selnum.appendChild(item)
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
            res.innerHTML = `<p>Ao todo, temos ${tot} números cadastrados.</p>`
            res.innerHTML += `<p>O maior número inserido foi ${maior}</p>`
            res.innerHTML += `<p>O menor número inserido foi ${menor}</p>`
            res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
            res.innerHTML += `<p>A média da soma entre os valores foi ${media}</p>`
        }
}