
//async function returns Promise by default
async function getValue() {
    //return 10 
    //return Promise.resolve(10)
    //return 10 //Promise.resolve(10)
}

async function main() {
   console.log(await getValue())
    // getValue().then(value => console.log(value))
}
main()