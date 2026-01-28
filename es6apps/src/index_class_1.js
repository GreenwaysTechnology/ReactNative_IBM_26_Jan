class Employee {
    //instance variables
    id = 1
    name = 'subramanian'

    //methdos
    calculate(salary = 0) {
        return salary * 3
    }
}
//let keyword,emp is reference variablle,
//new is operator, Employee() is constructor call
let emp = new Employee()
console.log(emp.id, emp.name, emp.calculate(300))