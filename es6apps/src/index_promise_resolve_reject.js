function blockMe(message) {
    console.log(message)
}
function login(userName, password) {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('login success')
    }
    return Promise.reject('login failed')
}
function main() {
    blockMe('start')
    login('admin', 'admin')
        .then(status => console.log(status))
        .catch(err => console.log(err))
    login('xxx', 'yyy')
        .then(status => console.log(status))
        .catch(err => console.log(err))
    blockMe('end')
}
main()