function filter(data) {
    return data.filter(item => item.status === true)
}

let employees = [{
    id: 1,
    name: 'subramanian',
    status: true
},
{
    id: 2,
    name: 'Ram',
    status: false
},
{
    id: 3,
    name: 'Karthik',
    status: true
},
{
    id: 4,
    name: 'Murugan',
    status: false
}

]

const response = filter(employees)

console.log(employees === response ? "Same" : "Different")
