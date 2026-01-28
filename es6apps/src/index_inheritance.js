//parent
class Account {
    constructor() {
        console.log('account is initalized')
    }
    deposit() {
        return 0
    }
}
//child
class SavingsAccount extends Account {
    constructor() {
        super()
        console.log('SavingsAccount is initalized')
    }
    //redefining(overriding)
    deposit() {
        return 1000
    }
}
let sb = new SavingsAccount()
console.log(sb.deposit())