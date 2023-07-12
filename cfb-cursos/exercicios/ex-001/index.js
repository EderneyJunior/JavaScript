const cursos=[...document.querySelectorAll('.curso')]
const caixa1=document.querySelector('#caixa1')
const caixa2=document.querySelector('#caixa2')
const botao=document.querySelector('#btn-transferir')

cursos.map((el)=>{
    el.addEventListener('click', ()=>{
        el.classList.toggle('selecionado')
    })
})

botao.addEventListener('click', ()=>{
    const selecionados=[...document.querySelectorAll('.selecionado')]
    const nselec=[...document.querySelectorAll('.curso:not(.selecionado)')]

    selecionados.map((el)=>{
        caixa2.appendChild(el)
    })

    nselec.map((el)=>{
        caixa1.appendChild(el)
    })
})
