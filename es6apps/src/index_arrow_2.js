let math = (a = 0, b = 0) => {
    let c = a * b
    console.log(`C ${c}`)
}
math(10, 10)

//arrow with parameters, with return
let multiply = (a = 0, b = 0) => {
    return a * b
}
console.log(multiply(10, 10))
//if fun has only return statement, we can remove {} and return statement
multiply = (a = 0, b = 0) =>  a * b
console.log(multiply(10, 10))


