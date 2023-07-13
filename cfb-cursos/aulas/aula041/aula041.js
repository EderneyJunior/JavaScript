const caixa1=document.querySelector('#caixa1')
const btn_curso=[...document.querySelectorAll('.curso')]
const c1_2=document.querySelector('#c1_2')
const cursos=['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'React Native']

// const novoElemento=document.createElement('div')
// novoElemento.setAttribute('id', 'c7')
// novoElemento.setAttribute('class', 'curso c1')
// novoElemento.innerHTML='React Native'

// caixa1.appendChild(novoElemento)

cursos.map((el, i)=>{
    const novoElemento=document.createElement('div')
    novoElemento.setAttribute('id', `c${i +1}`)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML=el

    const btn_lixo=document.createElement('img')
    btn_lixo.setAttribute('src', 'lixeira.png')
    btn_lixo.setAttribute('class', 'lixo')

    btn_lixo.addEventListener('click', (evt)=>{
        caixa1.removeChild(novoElemento)
        caixa1.removeChild(btn_lixo)
    })

    caixa1.appendChild(novoElemento)
    caixa1.appendChild(btn_lixo)
})