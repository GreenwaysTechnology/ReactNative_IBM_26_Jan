
//is it pure or not
// function add(todos, todo) {
//     return todos.push(todo)
// }
// function add(todos, todo) {
//    // return todos.push(todo)
//    return todos.concat(todo)
// }
function add(todos, todo) {
    // return todos.push(todo)
    //  return todos.concat(todo)
    return [...todos, todo]
}


let todos = [{
    title: 'Learn react',
    done: true
}];

//Testing 
Object.freeze(todos)

console.log(add(todos, { title: 'Learn Microservices', done: false }));
