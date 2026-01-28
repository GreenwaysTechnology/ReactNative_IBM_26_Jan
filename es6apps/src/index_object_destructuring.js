
// function getStock() {
//     return {
//         id: 1,
//         symbol: 'google',
//         qty: 100
//     }
// }
// function getStock(id=1, symbol = 'google', qty = 0) {
//     return {
//         id: id,
//         symbol:symbol,
//         qty: qty
//     }
// }
// function getStock(id=1, symbol = 'google', qty = 0) {
//     return {
//         id,
//         symbol,
//         qty
//     }
// }
const getStock = (id = 1, symbol = 'google', qty = 0) => ({
    id,
    symbol,
    qty
})

console.log(getStock())