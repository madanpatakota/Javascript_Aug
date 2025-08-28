//function return type and non-return type

//a function which returns the data called the retunr type function

//a function which wo't give any retun type then that function called non return type funciton.


//let myName = "Madan";


//return type function..
function getmyName(){
    return "Javascript";
}

//console.log(getmyName());  // returns the data.  // "Madan"

let subJectname = getmyName();
console.log(subJectname);

//non-return type or Void function both are same.
function fun3(){
  console.log("Third function");  
}

function getSubjects(){
    let subjectNames = ["Html" , "js" , "css"];
    return subjectNames;
}

//                                0      1      2
let data = getSubjects();  // ["Html" , "js" , "css"];

//good point ??

data[0] = "abcdedf"  //you are updating the value in data based on the index

console.log("Data is " , data);




