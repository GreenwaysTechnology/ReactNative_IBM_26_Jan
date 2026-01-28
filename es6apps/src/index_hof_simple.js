function add(a, b) {
    return a + b
}
//passing value
//via variable
let x = 10
let y = 20
console.log(add(x, y))
//via values directly
console.log(add(20, 30))

//hof
function connect(cb){
    cb()
}
let sqlconnect = function(){
    console.log('sql connect')
}
connect(sqlconnect)
connect(function(){
    console.log('sql connect direct')
})
