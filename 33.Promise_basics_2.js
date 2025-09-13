

//debugger helps to you to understand program

//1. Promise will handle the 2 callback functions 1. success callback 2. reject callback

//2. right now i am using the lambda;



//3. i am going to take the container to capture the promise related details. you can let , var and const
let mypromise = new Promise((successfn,rejectfn)=>{
    
    let isTrue = false;
    if(isTrue){
    successfn();
    }
    else{
      rejectfn();
    }
});


//"madan".


mypromise.then(function(){
     console.log("success");
}).catch(function(){
     console.log("some error occured")
})


