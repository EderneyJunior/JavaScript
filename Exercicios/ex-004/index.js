function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        alert('[ERRO]. Digite um numero!')
    } else {
        let n = Number(num.value)
        let cont = 1

        while (cont <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${cont} = ${n*cont}`
            tab.appendChild(item)
            cont ++
        }
    }
}