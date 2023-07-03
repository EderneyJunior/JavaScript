let amigo = {nome: 'Ederney', Idade: 20, altura: 1.70, sexo: 'M', peso: 64, engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)