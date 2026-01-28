let message = 'Hello'

if (message) {
    console.log(message)
} else {
    console.log('falsy- wrong')
}
message = ''
if (message) {
    console.log(message)
} else {
    console.log('falsy- wrong')
}
let myvar;
if (myvar) {
    console.log(`MyVar is ${myvar}`)
} else {
    console.log(`Falsy MyVar is ${myvar}`)
}
myvar = 0
if (myvar) {
    console.log(`MyVar is ${myvar}`)
} else {
    console.log(`Falsy - MyVar is ${myvar}`)
}
myvar = false
if (myvar) {
    console.log(`MyVar is ${myvar}`)
} else {
    console.log(`Falsy- MyVar is ${myvar}`)
}
