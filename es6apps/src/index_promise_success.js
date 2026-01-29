function blockMe(message){
    console.log(message)
}
function getPromise(){
    return Promise.resolve('Success')
}
function main(){
  blockMe('start')
  getPromise().then(value=>console.log(value))
  blockMe('end')
}
main()