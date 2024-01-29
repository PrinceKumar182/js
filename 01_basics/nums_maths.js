const score=400

const balance=new Number(300)
console.log(balance)
console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(1))

const otherNumber=23.99999
console.log(otherNumber.toPrecision(2))
const hundreds=1000000000
console.log(hundreds.toLocaleString('en-In'))



// ________________________-maths-_________________________


console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.5))
console.log(Math.ceil(4.9))
console.log(Math.floor(4.6))

console.log(Math.random())
console.log((Math.random()*10)+1)

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)