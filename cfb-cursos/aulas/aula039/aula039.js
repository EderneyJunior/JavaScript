const caixa1=document.querySelector('#caixa1')
const cursos=[...document.querySelectorAll('.curso')]
const c1_2=document.querySelector('#c1_2')

console.log(c1_2.parentElement.parentElement.children[4])

/*
console.log(caixa1.hasChildNodes())
console.log(cursos[0].hasChildNodes())

caixa1.children.length > 0 ? console.log('Possui filhos!') : console.log('Não possui filhos!')

console.log(`${caixa1.children[1].innerHTML='TESTE'}`)
*/