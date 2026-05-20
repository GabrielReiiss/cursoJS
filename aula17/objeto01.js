let amigo = {nome: 'Gabriel',
    sexo: 'M', 
    peso: 70.0, 
    engordar(p){
        console.log('Engordou')
        this.peso += p
}}

amigo.engordar(10)

console.log(`${amigo.nome} pesa ${amigo.peso} kg.`) 