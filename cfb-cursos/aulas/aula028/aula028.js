const converterInt=(e)=>parseInt(e)
const dobrar=(e)=>e*2
let num=['1', '2', '5', '10'].map(converterInt)
console.log(num)
console.log(num.map(dobrar))

// let el=document.getElementsByTagName('div')

// let val=Array.prototype.map.call(el, ({innerHTML})=>innerHTML)
// console.log(val)

// let el=document.getElementsByTagName('div')
// el = [...el]
// el.map((e, i)=>{
//     console.log(e.innerHTML)
// })
// console.log(el)

// const cursos=['HTML', 'CSS', 'JavaScript', 'PHP', 'React']
// let c=cursos.map((el, i)=>{
//     return `<div> ${el} </div>`
// })

// console.log(c)