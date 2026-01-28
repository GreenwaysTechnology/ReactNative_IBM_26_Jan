const login = (userName, password, resolve, reject) => {
    if (userName === 'admin' && password === 'admin') {
        resolve('login is success')
    } else {
        reject('Login is failed')
    }
}
login('admin', 'admin', status => console.log(status), err => console.log(err))