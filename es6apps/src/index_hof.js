//hof
function connect(cb){
    cb('sql connect')
}
let sqlconnect = function(data){
    console.log(data)
}
connect(sqlconnect)
connect(function(data){
    console.log(`${data} direct`)
})