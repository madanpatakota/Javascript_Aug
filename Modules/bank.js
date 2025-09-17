export const bankName = "HDFC Bank";



//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv imp

// void or non-void 

//non-void
export function openAccount(customername){
      return `${customername} acccount opened in ${bankName}`
}


//non-void
export function getBalance(customername , amount){
      return `Balance for Account ${customername} - ${amount}`
}