// Primitive : Number, string, boolean, null, undefined, Symbol, BigInt
// Non-Primitive : Array, Object, Function

//++++++++++++++++++++++++++++++++++++++++++++++++++
//Stack ( Primitive : We will get a copy of variable, all changes will be done in that copy only )
//Heap ( Non-Primitive : Changes will be done in address)

let a=10
let b=a
b=5
console.log([a,b])

//Heap................
let one = {
    email: "abc@d.com",
    upi: "abc@ibl"
}

let two=one
one.email="123$$"
two.upi="123##"

console.log(two.email)
console.log(one.upi)