const caixaCursos=document.querySelector('#caixaCursos')
const btn_add=document.querySelector('#btnAdd')
const btn_remover=document.querySelector('#btnRemover')
const cursos=['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'React Native']
const btnA=document.querySelector('#btnAdd_a')
const btnD=document.querySelector('#btnAdd_d')
const nome=document.querySelector('#addCurso')


let indice=0
const criarCurso=(curso)=>{
    const novoElemento=document.createElement('div')
    novoElemento.setAttribute('id', `c${indice}`)
    novoElemento.setAttribute('class', 'cursos')
    novoElemento.innerHTML=curso

    const comandos=document.createElement('div')
    comandos.setAttribute('class', 'radio')

    const selec=document.createElement('input')
    selec.setAttribute('type', 'radio')
    selec.setAttribute('name', 'selec_radio')

    comandos.appendChild(selec)
    novoElemento.appendChild(comandos)

    return novoElemento

}

const cursoSelecionado=()=>{
    const todosR=[...document.querySelectorAll('input[type=radio]')]
    const radSelec=todosR.filter((el)=>{
                return el.checked
    })

    radSelecionado=radSelec[0]
    return radSelecionado
}

cursos.map((el)=>{
    const addCurso=criarCurso(el)
    caixaCursos.appendChild(addCurso)
    indice++
})

btnCurso.addEventListener('click', (evt)=>{
    const radCursoSelec=cursoSelecionado()
    const cursoSelec=radCursoSelec.parentNode.previousSibling.textContent
    alert(cursoSelec)
})

btn_remover.addEventListener('click', ()=>{
    const remover=cursoSelecionado()

    if(remover==undefined){
        alert('Selecione um curso para remover!')
    }else{
        const cursoSelec=remover.parentNode.parentNode
        caixaCursos.removeChild(cursoSelec)
        
    }
})

btnA.addEventListener('click', ()=>{
    const cursoAnt=cursoSelecionado()
    
    if(cursoAnt==undefined){
        alert('Selecione um curso para adicionar antes dele!')
    }else{
        const cursoSelecA=cursoAnt.parentNode.parentNode
        const novoCurso=criarCurso(nome.value)

        if(nome.value!=''){
            caixaCursos.insertBefore(novoCurso, cursoSelecA)
        }else{
            alert('Digite um curso para adicionar!')
        }
    }
})

btnD.addEventListener('click', ()=>{
    const cursoDps=cursoSelecionado()
    
    if(cursoDps==undefined){
        alert('Selecione um curso para adicionar depois dele!')
    }else{
        const cursoSelecA=cursoDps.parentNode.parentNode
        const novoCurso=criarCurso(nome.value)

        if(nome.value!=''){
            caixaCursos.insertBefore(novoCurso, cursoSelecA.nextSibling)
        }else{
            alert('Digite um curso para adicionar!')
        }
    }
})
