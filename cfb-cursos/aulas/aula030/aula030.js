const dc1=document.getElementById('c1')
const dc2=document.getElementById('c2')
const dc3=document.getElementById('c3')
const dc4=document.getElementById('c4')
const dc5=document.getElementById('c5')
const dc6=document.getElementById('c6')

const arrauElementos=[dc1, dc2, dc3, dc4, dc5, dc6]

console.log(arrauElementos)

arrauElementos.map((e, i)=>{
    console.log(e)
    e.innerHTML = '<h2>Ederney</h2>'
})