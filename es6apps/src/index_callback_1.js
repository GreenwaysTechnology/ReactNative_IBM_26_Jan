function blockMe(message){
    console.log(message)
}
function sayHello(callback){
    setTimeout(callback,1000)    
}
function main(){
  blockMe('start')
  sayHello(()=>console.log('hello'))
  blockMe('end')
}
main()