const getUser = () => {
    console.log('getUser is called')
    return new Promise((resolve, reject) => {
        let user = { name: 'admin' }
        //    user = null
        if (user) {
            setTimeout(resolve, 1000, user)
        } else {
            setTimeout(reject, 1000, 'User not found')
        }
    })
}
const login = user => {
    console.log('login is called')
    return new Promise((resolve, reject) => {
        if (user.name === 'admin') {
            setTimeout(resolve, 1000, 'login is success')
        } else {
            setTimeout(reject, 1000, 'login is failed')
        }
    })
}
const showdashbaord = status => {
    console.log('showdashbaord is called')
    return new Promise((resolve, reject) => {
        if (status === 'login is success') {
            setTimeout(resolve, 1000, 'welcome to dashboard')
        } else {
            setTimeout(reject, 1000, 'welcome to guest')
        }
    })
}
async function main() {
    // getUser()
    //     .then(user => login(user))
    //     .then(status => showdashbaord(status))
    //     .then(page => console.log(page))
    //     .catch(err => console.log(err))
    try {
        const user = await getUser()
        const status = await login(user)
        const page = await showdashbaord(status)
        console.log(page)
    }
    catch (err) {
        console.log(err)
    }
}
main()