let hello = function () {
    return "Hello"
}
console.log(hello())

let add = function (a = 0, b = 0) {
    let c = a + b
    console.log(`C ${c}`)
}

add(10, 10)
add()

add = function (a = 0, b = 0) {
    let c = a + b
    return c
}

console.log(add(10, 10))
console.log(add())