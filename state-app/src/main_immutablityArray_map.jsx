
function transform(data) {
    return data.map(item => item)
}

let list = ['subramanian', 'ram', 'murugan']

const response = transform(list)

console.log(list === response ? "Same" : "Different")
