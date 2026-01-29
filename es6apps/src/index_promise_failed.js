function blockMe(message){
    console.log(message)
}
function getPromise(){
    return Promise.reject('Failed')
}
function main(){
  blockMe('start')
  getPromise().catch(err=>console.log(err))
  blockMe('end')
}
main()