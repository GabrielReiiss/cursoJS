let num = [5, 8, 4]

console.log(`Vetor antes da inserção padrão: ${num}`)

num[2] = 6

console.log(`Vetor após a inserção padrão: ${num}`)

console.log(`Vetor antes da inserção push: ${num}`)

num.push(9)

console.log(`Vetor após da inserção push: ${num}`)

console.log(`Vetor possui ${num.length} posições`)

console.log(`Vetor ordenado: ${num.sort()}`)

var pos = num.indexOf(8)
console.log(pos)