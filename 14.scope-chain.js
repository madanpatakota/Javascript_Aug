{
    //block1 - Scope1
    let fruit1 = "Apple";
    console.log("Block1 - scope3" , fruit1);
    console.log("Block2 - scope3" , fruit2);
    console.log("Block3 - scope3" , fruit3);
    {
         //block2 - Scope2
        let fruit2 = "Mango";
        //console.log("Block1 - scope2" , fruit1);
        //console.log("Block2 - scope2" , fruit2);
        //console.log("Block3 - scope3" , fruit3);
        {
            //block3 - Scope3
              let fruit3 = "Kiwi"
            //   console.log("Block1 - scope3" , fruit1);
            //   console.log("Block2 - scope3" , fruit2);
            //   console.log("Block3 - scope3" , fruit3);
              
         }
    }
}


//Rule do't take my example
//Real time projects variable access var -> you can access anywhere in the application.

