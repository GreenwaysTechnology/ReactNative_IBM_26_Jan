function blockMe(message){
    console.log(message)
}
function sayHello(callback){
    setTimeout(callback,1000,"Hello Async")    
}
function main(){
  blockMe('start')
  sayHello(data=>console.log(data))
  blockMe('end')
}
main()