// you have to keep in mind await is powerful

//async key word which tells that its asynchourms function means asynchors call


//Promise

async function getAuthorDetails(){
    return "Arudanrhi rai";  //instead of the string let me promise
}

console.log(getAuthorDetails);     // function wil print

let author = getAuthorDetails();

author.then((authorname)=>{
     //console.log(authorname);
     document.writeln(authorname);
})



console.log(author);   // statements executon


//statements

