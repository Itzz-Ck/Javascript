console.log(Math.random())
console.log((Math.random())*10+1)
console.log(Math.floor((Math.random())*10+1))


//If we want to fix the random function to a certain range then do remember this formula

const min=10
const max=20
console.log(Math.floor(Math.random() * (max-min+1))+min)
