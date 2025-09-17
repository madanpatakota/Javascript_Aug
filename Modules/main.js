import { bankName ,openAccount , getBalance } from "./bank.js";   //half-hour
import { employeeName } from "./employee.js";

console.log(bankName);
console.log(employeeName);

let accountName = openAccount("Madan");
console.log(accountName);

let balance = getBalance("Madan", "10k" );
console.log(balance);