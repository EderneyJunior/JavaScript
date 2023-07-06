let num=[10, 20, 50, 30, 40]
let obj = document.getElementsByTagName('div')

for(n of num) {
    console.log(n)
}

console.log('-=-==-=-=-====-=-=-===-==-=-==-=')

for(n in num) {
    console.log(n)
}

console.log('-=-==-=-=-====-=-=-===-==-=-==-=')

for(o of obj) {
    console.log(o.innerHTML = 'Curso')
}

for(o in obj) {
    console.log(obj[o].innerHTML = 'ederney')
}