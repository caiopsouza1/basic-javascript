// Metodos de array
const list = ['a', 'b', 'c', 'd', 'e',]

console.log(list.length)
console.log(list[2])

list[5] = 'f'

console.log(list)
console.log(list[list.length - 1])

list.push('g')
console.log(list)

list.shift()
console.log(list)

list.unshift('a')
console.log(list)

// Objetos (proriedades e valores)

const product = {
    name: 'Camisa',
    price: 15.99,
    inStock: true,
    sizes: ['P', 'M', 'G'],
    'Main Color': 'Azul'
    // Nomenclatura acima é pouco usada 
}

console.log(product.name)
console.log(product['name'])
console.log(product['Main Color'])

// Desestruturando
const {price, inStock} = product

console.log(price)
console.log(inStock)

const [n1, n2] = list

console.log(n1)
console.log(n2)

// JSON - JavaScript Object Notation
const dog = {
    name: 'Mac',
    age: 6
}

const json = JSON.stringify(dog)
console.log(json)

const obj = JSON.parse(json)
console.log(obj)

// Estruturas condicionais

const b = 'Caio'

if(b === 'João') {
    console.log('O nome é João')
} else if (b === 'Pedro') {
    console.log('O nome é Pedro')
} else {
    console.log('Não foi encontrado o nome do usuario')
}

// If ternário (desencorajado quando é algo mais complexo por perder visibilidade)
const someNumber = 24

let testingANumber = someNumber < 20 ? 'Yes' : 'No'
console.log(testingANumber)

// Estruturas de repetição
const myList = [1, 2, 3, 4, 5]
let counter = 0

while (counter < myList.length) {
    console.log('Imprimindo ' + myList[counter])
    counter++
}

const mySecondList = ['a', 'b', 'c', 'd', 'e']

// Template literals
for(let counter = 0; counter < mySecondList.length; counter++) {
    console.log(`Imprimindo: ${mySecondList[counter]}`)
}

// metodos de repetição para arrays

const names = ['Caio', 'Pedro', 'Matheus', 'Maria']

names.forEach(function(name){
    console.log(`O nome é: ${name}`)
})

const modifiedNames = names.map(function(name){
    if (name === 'Caio') {
        return (name = 'Sr. Caio')
    } else {
        return name
    }
})

console.log(modifiedNames)

const bigNumbers = [1, 2, 3, 4, 5, 10, 100].filter(function(number){
    return number >= 5
})

console.log(bigNumbers)

const sumAll = [10, 20, 30, 40, 50].reduce(function(total, number){
    return total + number
})

console.log(sumAll)

// Funções
function minhaFuncao() {
    console.log('Hello world')
}

minhaFuncao()

function nomeCompleto(nome, sobrenome) {
    return `O nome completo é ${nome} ${sobrenome}`
}

console.log(nomeCompleto('Caio', 'Patricio'))
console.log(nomeCompleto('Maria', 'Morais'))

const primeiroNome = 'Allan'
const segundoNome = 'Silva'

const meuNomeCompleto = nomeCompleto(primeiroNome, segundoNome)
console.log(meuNomeCompleto)

// Arrow functions
const myArrowFunction = (a, b) => {
    return a + b
}

console.log(myArrowFunction)

const mySimpleArrowFunction = (a, b) => a + b
console.log(mySimpleArrowFunction)