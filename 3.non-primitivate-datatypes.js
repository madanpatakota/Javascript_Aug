// Array : Collection of values. value can be anything  []



// Data 
// checkbox true or false


var myName    = "madan";  //get the datbase

console.log(myName);


let subjects = [10,20,30,40];  // as a learing
console.log(subjects);

let SubjectByIndex = subjects[100000000]; // 10
console.log(SubjectByIndex);

let studentnames = ["john" , "ram"];


//I have creatd multiplevalues for ----------------

//                      0      1     2       3
let multipleValues = ["john" , 10 , true , 12.09];
console.log(multipleValues);


//Prpare the Real time Example

let StudentsList = [{
                      "studentname":"Vasavi",
                      "location"   : "Pdtr",
                      "Aadharcard" : "1234-XXXX-7890"
                    },
                    {
                      "studentname":"Sahiti",
                      "location"   : "Pdtr",
                      "Aadharcard" : "7890-XXXX-1234"
                    }];
    

let student = {
                      "studentname":"Vasavi",
                      "location"   : "Pdtr",
                      "Aadharcard" : "1234-XXXX-7890"
              };



//error , indexoutofrange 
//real time 100 in project - think accordingly
//clean code


//Object -> vlue can be anything
let my_personal_details = {
                   "aadharCardNo" : "1234-9087-9087",
                   "DOB"          : "01-01-1990",
                   "Location"     : "AP",
                   "isMarried"    : true,
                   "Salary"       : 20000.89
                 };




console.log(my_personal_details);
console.log(my_personal_details.Location);



let my_personal_details_1 = {
                   "aadharCardNo" : "1234-3456-7890",
                   "DOB"          : "01-01-1990",
                   "Kids"         : { 
                                      'firstKid' : 'John'
                                    },
                   "Hobbies"      : ["Cricket" , "Chess" , "Reading" ,"abc"]
                 }                 //     0        1          2


console.log(my_personal_details_1);
console.log(my_personal_details_1.Hobbies);        //["Cricket" , "Chess" , "Reading"]
console.log(my_personal_details_1.Hobbies[1]);     //chess

console.log(my_personal_details_1.Kids);          // { 'firstKid' : 'John'},
console.log(my_personal_details_1.Kids.firstKid); //John






// Director - Rajavmoule - 4 or 5 years ( Script work proper plan)

//Mentors
let a = 10; 
let b = 20;