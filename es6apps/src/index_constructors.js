class Employee {
    //instance variables
    id
    name
    constructor(id = 1, name = 'subramanian') {
        this.id = id
        this.name = name
    }
    //methdos
    calculate(salary = 0) {
        return salary * 3
    }
}
//let keyword,emp is reference variablle,
//new is operator, Employee() is constructor call
let emp = new Employee()
console.log(emp.id, emp.name, emp.calculate(300))

emp = new Employee(2,'Murugan')
console.log(emp.id, emp.name, emp.calculate(300))