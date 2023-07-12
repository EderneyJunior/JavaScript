//const c1=document.querySelectorAll('#c1')
const cursos=[...document.querySelectorAll('.curso')]

cursos.map((e)=>{
    e.addEventListener('click', ()=>{
        e.classList.add('destaque')
        console.log(`${e.innerHTML} foi Clicado`)
    })
})
