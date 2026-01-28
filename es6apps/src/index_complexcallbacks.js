const login = (userName, password, resolve, reject) => {
    if (userName === 'admin' && password === 'admin') {
        setTimeout(resolve, 1000, 'login success')
    } else {
        setTimeout(reject, 1000, 'login is failed')
    }
}
function main() {
    login('admin', 'admin', status => console.log(status), err => console.log(err))
    login('xx', 'xx', status => console.log(status), err => console.log(err))

}
main()