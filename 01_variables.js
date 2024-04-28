const accountId = 144553
let accountEmail = "harsh@google.com"
var accountPass = "12345"
accountCity = "Varanasi"//It is allowed but it is not good appoach

//Prefer not to use var because of issue in block scope and functional scope

console.log(accountId)
console.table([accountId, accountEmail, accountPass, accountCity])