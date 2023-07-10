function* perguntas() {
    const nome=yield 'Qual seu nome ?'
    const esporte=yield 'Qual seu esporte favorito ?'

    return `Seu nome é ${nome}, seu esporte favorito é ${esporte}`
}

const itc=perguntas()

console.log(itc.next().value)
console.log(itc.next('Ederney').value)
console.log(itc.next('Futebol').value)