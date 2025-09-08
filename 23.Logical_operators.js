 

//  && , || , !


// t && t -- true
// t && f -- false
// f && t -- false
// f && f -- false


//if you are having not  100 rupees and if you  are having time
// then we wot'ot go cinema

// console.log((1 == 1) && (2 == 2));  //true please give instruction to complier
// console.log((1 == 1) && (2 == 3));  //false
// console.log((1 == 2) && (2 == 2));  //false
// console.log((1 == 2) && (2 == 3));  //false


// if((1 == 1) && (2 == 2)){
//      console.log("Right");
// }
// else{
//     console.log("wrong");
// }

// if((1 == 1) && (2 == 3)){
//      console.log("Right");
// }
// else{
//     console.log("wrong");
// }




//or


// t || t -- true
// t || f -- true
// f || t -- true
// f || f -- false


//prepare the example from end 

//100 or time 

//no 100 or time 

//100 or no time 

//no 100 or no time --> false
console.log((1 == 1) || (2 == 2));  //true please give instruction to complier
console.log((1 == 1) || (2 == 3));  //true
console.log((1 == 2) || (2 == 2));  //true
console.log((1 == 2) || (2 == 3));  //false


// if((1 == 1) || (2 == 2)){
//      console.log("Yes");
// }
// else{
//     console.log("No");
// }


if((1 == 2) || (2 == 2)){
     console.log("Yes");
}
else{
    console.log("No");
}


// (2*3)+4



// !   oppsit


// !t => false;


console.log(1==1);
console.log(!(1==1));


//if(!(1==1))
// !f => true




// let amount = 500;
// let HavingTime = "Yes";

// if(amount == 500 && HavingTime == "Yes"){
//     console.log("We can go movie");
// }
// else{
//     console.log("No i am having the some other works");
// }





let amount = 0;
let HavingTime = "Yes";

if(amount == 500 || HavingTime == "Yes"){
    console.log("We can go movie");
}
else{
    console.log("No i am having the some other works");
}