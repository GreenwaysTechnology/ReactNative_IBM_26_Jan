
let list = ['apple', 'orange', 'jackfruit']

list.forEach(item => {
    console.log(item)
})

let todos = [
    { id: 1, status: 'done', title: 'learn js' },
    { id: 2, status: 'pending', title: 'learn react' },
    { id: 3, status: 'pending', title: 'learn react native' }
]
todos.forEach(todo => {
    console.log(todo.id, todo.status, todo.title)
})