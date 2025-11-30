// Q5 Employee Inheritance
class Employee {
    constructor(name,department){ this.name=name; this.department=department; }
    work(){ return `${this.name} works in ${this.department}`; }
}
class Manager extends Employee {
    work(){ return `${this.name} manages the ${this.department} department`; }
}

let e=new Employee("Kishan","IT");
let m=new Manager("Raghav","Sales");

console.log(e.work());
console.log(m.work());
