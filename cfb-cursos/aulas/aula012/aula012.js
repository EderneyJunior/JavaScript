const obj=document.getElementsByTagName('div')
const obj2=[...document.getElementsByTagName('div')]

obj2.forEach(element => {
    element.innerHTML = 'Curso'
    console.log(element)
})

console.log(obj)
console.log(obj2)
