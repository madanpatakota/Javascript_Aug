
// constrctuor - 
// special method automaticaly executs when you call by using new operator

// mehtod      - function inside of class
// fields      - holds  the data
// properties  - handle the data


// myname;
// console.log(myname);  //undefined


class Student{

    _sname;   //field
    _age;
    
    constructor(sname , studentage){
      this._sname = sname;
      this._age   = studentage
    }


    getStudentDetails(){
        return `Studentname is ${this._sname}  and student age is ${this._age}`
    }

}

let student = new Student("John smith" , 20);
let sDetails = student.getStudentDetails();
console.log(sDetails);


let student1  = new Student("Robert Junior" , 18);
let sDetails1 = student1.getStudentDetails();
console.log(sDetails1);


let student2  = new Student("Rabindra" , 16);
let sDetails2 = student2.getStudentDetails();
console.log(sDetails2);

//by using instance you call the member
//method , field or property
// console.log(student._sname);
// console.log(student._age);