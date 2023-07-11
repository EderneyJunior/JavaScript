const cursoTodos=[...document.getElementsByClassName('curso')]
const cursoC1=[...document.getElementsByClassName('c1')]
const cursoC2=[...document.getElementsByClassName('c2')]

console.log(cursoTodos)
console.log(cursoC1)
console.log(cursoC2)

cursoC2.map((el, i)=>{
    el.classList.add('destaque')
})