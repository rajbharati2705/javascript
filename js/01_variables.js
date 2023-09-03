const accountId="12345"
let account_email="raj.@gmail.com"
var account_password="458679"
account_name="ramu"
let account_city

// now lets try to change it

// accountId=789 //not allowed
// TypeError: Assignment to constant variable.

//var scope is everywhere (i.e) global,let is limited to block
console.log(accountId); 
account_email="hc.hc.com"
account_password=75689
account_name="raj"
console.table([accountId,account_email,account_password,account_name,account_city])