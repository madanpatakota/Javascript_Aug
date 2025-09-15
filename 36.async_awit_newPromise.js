// async always returns the promise


//shall we implment real promise??? yes

async function getAuthorDetails(){
    return new Promise((resolve , reject)=>{
         // let author = "Rabindra nath tagore";
          let author;
          if(author){
              resolve(author);
          }
          else{
            reject("Auhtor is undefined or null or something issue is their....");
          }
    })
}

console.log(getAuthorDetails);     // function wil print

let author = getAuthorDetails();
console.log(author);   // promise

author.then((authorname)=>{
     //console.log(authorname);
     document.writeln(authorname);
}).catch(
    (rejectedMessage)=>{
    document.writeln(rejectedMessage);
})


