const getUser = (resolve, reject) => {
    console.log('getUser is called')
    let user = { name: 'admin' }
    //    user = null
    if (user) {
        setTimeout(resolve, 1000, user)
    } else {
        setTimeout(reject, 1000, 'User not found')
    }
}
const login = (user, resolve, reject) => {
    console.log('login is called')
    if (user.name === 'admin') {
        setTimeout(resolve, 1000, 'login is success')
    } else {
        setTimeout(reject, 1000, 'login is failed')
    }
}
const showdashbaord = (status, resolve, reject) => {
    console.log('showdashbaord is called')
    if (status === 'login is success') {
        setTimeout(resolve, 1000, 'welcome to dashboard')
    } else {
        setTimeout(reject, 1000, 'welcome to guest')
    }
}
function main() {
    getUser(user => {
        login(user, status => {
            showdashbaord(status, successPage => console.log(successPage), err => console.log(err))
        }, err => {
            console.log(err)
        })
    }, err => {
        console.log(err)
    })
}
main()