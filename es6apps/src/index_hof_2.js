//hof
// function connect(cb){
//     cb('sql connect')
// }
// const connect = (cb) => {
//     cb('sql connect')
// }
// let sqlconnect = (data) => {
//     console.log(data)
// }
// connect(sqlconnect)
// connect((data) => {
//     console.log(`${data} direct`)
// })
const connect = cb => cb('sql connect')
let sqlconnect = data => console.log(data)

connect(sqlconnect)
connect(data => console.log(`${data} direct`))