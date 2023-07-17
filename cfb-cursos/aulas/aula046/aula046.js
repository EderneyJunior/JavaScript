const caixaCursos=document.querySelector('#caixaCursos')
const btn_add=document.querySelector('#btnAdd')
const btn_remover=document.querySelector('#btnRemover')
const cursos=['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'React Native']
const btnA=document.querySelector('#btnAdd_a')
const btnD=document.querySelector('#btnAdd_d')
const nome=document.querySelector('#addCurso')
let indice=0

const tirarSeleção=()=>{
    const cursosSelecionados=[...caixaCursos.querySelectorAll('.selecionado')]

    cursosSelecionados.map((el)=>{
        el.classList.remove('selecionado')
    })
}

const criarCurso=(curso)=>{
    const novoElemento=document.createElement('div')
    novoElemento.setAttribute('id', `c${indice}`)
    novoElemento.setAttribute('class', 'cursos')
    novoElemento.innerHTML=curso

    novoElemento.addEventListener('click', ()=>{
        tirarSeleção()
        novoElemento.classList.toggle('selecionado')
    })

    return novoElemento
}

cursos.map((el)=>{
    const addCurso=criarCurso(el)
    caixaCursos.appendChild(addCurso)
    indice++
})

const selecionado=()=>{
    const selec=[...caixaCursos.querySelectorAll('.selecionado')]

    return selec[0]
}

btnCurso.addEventListener('click', (evt)=>{
    const cursoSelec=selecionado()
    alert(cursoSelec.innerHTML)
})

btn_remover.addEventListener('click', ()=>{
    const remover=selecionado()

    if(remover==undefined){
        alert('Selecione um curso para remover!')
    }else{
        caixaCursos.removeChild(remover)
    }
})

btnA.addEventListener('click', ()=>{
    const cursoAnt=selecionado()
    
    if(cursoAnt==undefined){
        alert('Selecione um curso para adicionar antes dele!')
    }else{
        const novoCurso=criarCurso(nome.value)

        if(nome.value!=''){
            caixaCursos.insertBefore(novoCurso, cursoAnt)
        }else{
            alert('Digite um curso para adicionar!')
        }
    }
})

btnD.addEventListener('click', ()=>{
    const cursoDps=selecionado()
    
    if(cursoDps==undefined){
        alert('Selecione um curso para adicionar depois dele!')
    }else{
        const novoCurso=criarCurso(nome.value)

        if(nome.value!=''){
            caixaCursos.insertBefore(novoCurso, cursoDps.nextSibling)
        }else{
            alert('Digite um curso para adicionar!')
        }
    }
})
