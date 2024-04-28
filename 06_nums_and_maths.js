//<----------------------- Numbers ------------------------->

const score = 400

const balance = new Number(100000)//we declare it as a number
console.log(balance);
console.log(balance.toString());//converts to string
console.log(balance.toString().length);
console.log(balance.toFixed(2));//Shows only 2 decimal number
console.log(balance.toLocaleString());//International number system
console.log(balance.toLocaleString('en-IN'));//Indian number system

//<------------------------ MATHs ---------------------------->

console.log(Math);
console.log(Math.abs(-4));//Converts negative value to positive
console.log(Math.round(5.4))
console.log(Math.round(5.5))
console.log(Math.ceil(5.1))//Takes highest value
console.log(Math.floor(5.1))//Takes lowest value
console.log(Math.min(10, 11, 9, 5, 15))
console.log(Math.max(10, 11, 9, 5, 15))
console.log(Math.random())//Gives random number b/w 0 and 1
console.log(Math.floor((Math.random() * 10) + 1))