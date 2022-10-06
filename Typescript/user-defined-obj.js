//literal style
var em1 = { id: 100, name: "Ravi", age: 21 };
console.log(em1.id);
console.log(em1.name);
console.log(em1.age);
function Employee() {
    this.eid = 101;
    this.ename = "ramesh";
    this.salary = 12000;
    this.display = function () {
        console.log("id is " + this.eid);
        console.log("name is " + this.ename);
        console.log("salary is " + this.salary);
    };
}
var em2 = new Employee();
em2.display();
