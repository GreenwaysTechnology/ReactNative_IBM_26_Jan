function blockMe(message) {
    console.log(message)
}
function login(userName, password) {
    if (userName === 'admin' && password === 'admin') {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, 'login success')
        })
    }
    return new Promise((resolve, reject) => {
        setTimeout(reject, 4000, 'login failed')
    })
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