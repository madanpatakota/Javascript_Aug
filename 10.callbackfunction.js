
// function getMyName(param1){
//      console.log(param1);
// }

// getMyName("Madan")


function getMyLocation(resolve , reject) {
    var test = resolve; 
    test("Madan");

    var rejectMessage = reject
    rejectMessage("rejected");
}

getMyLocation(
    function(param1){
        console.log("Hello world");
        console.log(param1);
     },
     function(param1){
        console.log("Hello world");
        console.log(param1);
     },
     function(param1){
        console.log("Hello world");
        console.log(param1);
     },
     function(param1){
        console.log("Hello world");
        console.log(param1);
     },
     "Hello world"
);


// function getName(param1){
//        param1  //string
// }

// getName("Javascript")


// var test = function(){
//     console.log("hello world");
// }

// test(); //calling 
