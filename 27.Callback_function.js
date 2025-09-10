function myName(){
      console.log("My name is Madan!!!!");
}

//         callbackfuntion
//setTimeout(myName, 5000);  // 

//settimeout is defualt funcion in js which can accept the ohter funciton(callback) as input parameter


                   //method
function setMyName(callbackFn){
    callbackFn();
}

setMyName(myName);




