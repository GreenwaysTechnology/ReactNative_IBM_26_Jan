
// function printEmployee(employee) {
//     console.log(`Id : ${employee.id}`)
//     console.log(`Name : ${employee.name}`)
//     console.log(`Status : ${employee.status}`)
// }


// function printEmployee(employee) {
//     const { id, name, status } = employee
//     console.log(`Id : ${id}`)
//     console.log(`Name : ${name}`)
//     console.log(`Status : ${status}`)
// }
function printEmployee({ id, name, status, address: { city } }) {
    console.log(`Id : ${id}`)
    console.log(`Name : ${name}`)
    console.log(`Status : ${status}`)
    console.log(`City : ${city}`)
}
let emp = {
    id: 1, name: 'Subramanian', status: true, address: {
        city: 'Coimbatore'
    }
}
printEmployee(emp)