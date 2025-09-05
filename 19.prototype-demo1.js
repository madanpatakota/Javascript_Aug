


//Day 1 : script is very imporant ?? Question is to be cimpartn


//Q)Do you want to get the bankname outside of the function?
//A: 3 ways 10 ways 50 ways   - restult is veryimp

//Exactly...
var dummyValueOfBankName = "";
function bank(bankname,locatoin){
   //console.log(bank.arguments);
   console.log(this); //window
   //dummyValueOfBankName = bank.arguments[1];
   dummyValueOfBankName = locatoin;
}
bank("hdfc","andhra");
console.log(dummyValueOfBankName); // "hdfc"..
//bankname
//console.log(bank.name);
//console.log(bank.length);
//console.log(bank.arguments);



