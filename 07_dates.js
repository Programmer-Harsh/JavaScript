let myDate = new Date();//It's an object
console.log(myDate)
console.log(myDate.getDay())
console.log(myDate.getMonth()+1)
console.log(myDate.toDateString())
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(typeof myDate);

let myCreatedDate = new Date(2024,0,21)
let myCreatedDate2 = new Date(2024,0,21,5,3)
let myCreatedDate3 = new Date("01-04-2024")
console.log(myCreatedDate.toString());
console.log(myCreatedDate2.toString());
console.log(myCreatedDate3.toLocaleString());

