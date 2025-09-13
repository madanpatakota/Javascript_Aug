

//Terminalogy


//member


// argumnet - word


// paramter - word


//



// resolve -- callbackfuntion

// reject -- callbackfuntion


//promise is a function which accepts the anonomous function as a input paramter

//2 input paramters 

//first is one indicaes the succsscallbackfunciton
//second is indicates the failcallbakcfuntion


// 1. function - I do't know

// 2. Promise is a kind of funtion  new function


//now you have created the promise


//1. what is the function
//2. what if i am going to call the fucntion with new keyword?

//let _________
//members
//2. what is the callback function?
     //A function accept other function as a parmter then that function is called callback
//3. waht does mean members?


 var a = "js";
 //a.
 


 //1  .banu jaya


//var johnCar = new Car("Dec 10 , 2020" , "John" , "UK");

//i am trying to configure the promise . promise is default funciton


// function fn_mis_Promise(successMessagefn , successMessagefn1, next1 , next2 , next3){
//    successMessagefn("Madan")
// }

// //24 hours seniors

// let my_Promise = new fn_mis_Promise(
//     function(myName){
//       return myName;
//     },function(){
//         return "one more success message"
//     },
//     function(){
//         return "one more success message"
//     },
//     function(){
//         return "one more success message"
//     },
//     function(){
//         return "one more success message"
//     },
//     function(){
//         return "one more success message"
//     }
// );  

// my_Promise();


let myPromise = new Promise((x, y) => {
    let myStatus = true;
    if (myStatus) {
        x();
    }
    else {
        y();
    }
})


//wneever hey then is a kind of member in promise
//toppercase() in
// catch

//use the promise or you can call the promise

//subscription


//if i am going to communitate to you  then i will get the result
myPromise.then(function(){
    console.log("Message")
})





