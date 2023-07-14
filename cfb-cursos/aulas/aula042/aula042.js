// const maior=idades.filter((v, i, arr)=>{

// })

const idades=[15, 45, 12, 20, 56, 44, 60, 75]
const maior18=idades.filter((val)=>{
    if(val >= 18){
        return val
    }
})

const menor18=idades.filter((val)=>{
    if(val < 18){
        return val
    }
})

console.log(idades)
console.log(maior18)
console.log(menor18)