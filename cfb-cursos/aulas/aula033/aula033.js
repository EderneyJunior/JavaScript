const divTodos=[...document.getElementsByTagName('div')]
const cursoTodos=[...document.getElementsByClassName('curso')]
const cursoC1=[...document.getElementsByClassName('c1')]
const cursoC2=[...document.getElementsByClassName('c2')]

const query_todas_div=[...document.querySelectorAll('div[class]')]
const query_c1=[...document.querySelectorAll('.c1')]
const query_c2=[...document.querySelectorAll('.c2')]
const query_c13=document.querySelector('#c13')
const query_c14=document.querySelector('#c14')
const el_p=[...document.querySelectorAll('div > p')]

console.log(query_todas_div)
console.log(query_c1)
console.log(query_c2)
console.log(query_c13.innerHTML)
console.log(query_c14.innerHTML)

el_p.map((e)=>{
    console.log(e.innerHTML)
})

/*
console.log(divTodos)
console.log(cursoTodos)
console.log(cursoC1)
console.log(cursoC2)

cursoC2.map((el, i)=>{
    el.classList.add('destaque')
})
*/