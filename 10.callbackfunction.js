
// function getMyName(param1){
//      console.log(param1);
// }

// getMyName("Madan")


function getMyLocation(callbackfn) {
    var test = callbackfn; 
    test("Madan");
}

getMyLocation(
    function(param1){
        console.log("Hello world");
        console.log(param1);
     }
);


// function getName(param1){
//        param1  //string
// }

// getName("Javascript")


// var test = function(){
//     console.log("hello world");
// }

// test(); //calling 
