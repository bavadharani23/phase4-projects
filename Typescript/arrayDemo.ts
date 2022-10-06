let num1:number[]=[];
let num2:Array<number>=[];
let num3:Array<number>=new Array();
num1.push(10);
num1.push(20);
num1.push(30);
let names:string[]=new Array();
let info1:any[]=new Array();
info1.push(100);
info1.push("ravi");
info1.push(true);
interface Employee{
    id:number;
    name:string;
    age:number;
}
let emp1:Employee={id:100,name:"ravi",age:21};
let emp2:Employee={id:101,name:"radha",age:20};
let emp3:Employee={id:102,name:"rash",age:31};
let emp4:Employee={id:103,name:"lokesh",age:36};
let emp5:Employee={id:104,name:"mahesh",age:24};

let employees:Array<Employee>=new Array();
employees.push(emp1);
employees.push(emp2);
employees.push(emp3);
employees.push(emp4);
employees.push(emp5);

employees.forEach(e=>console.log(e.id+" "+e.name+" "+e.age));





