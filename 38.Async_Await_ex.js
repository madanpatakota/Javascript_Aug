
function GetTarunResponse(){
   return new Promise((resolve , reject)=>{
        //console.log("Kindly wait for 5 secs...for get the GeethajliBook related information");
        setTimeout(() => {
           resolve("He will come 5 secs");
        },5000);
    })
}


function GetBhanuBook(){
   return new Promise((resolve , reject)=>{
        //console.log("Kindly wait for 3 secs...for get the Gora related information");
        setTimeout(() => {
           resolve("He will come 3 secs.");
        },3000);   //20 second 10 second 1 mins 5 mins
    })
}

// who is mahesh , tarun and banu

//Mahesh is the jscompiler

async function MeetUp(){
   
   let bookGeenthaliDetails = await GetBhanuBook();  // tarun
   console.log(bookGeenthaliDetails);

}

MeetUp();   //Mahesh - compiler

// Mahesh is giving the some work
console.log("CAlling his mom");
console.log("Doing some Whatsapp")




