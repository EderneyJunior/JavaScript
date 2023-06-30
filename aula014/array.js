let val = [8, 6, 5, 7, 10, 3, 9]

console.log(`O tamanho de val é ${val.length} elementos`)
console.log(val)
val.sort()
console.log(val)

val.push(20)
val.sort()

for (let pos in val) {
    console.log(`A posição ${pos} tem o valor ${val[pos]}`)
}