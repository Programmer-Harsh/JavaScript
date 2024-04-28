const name1 = "Harsh"
let age = 20

console.log(`Hello ${name1} this side and I'm ${age} years old.`)

const gameName = new String('GhostRider')//We can also declare a string like this
console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0, 4)//it exclude 4th position
console.log(newString)

const anotherString = gameName.slice(-10, 4)
console.log(anotherString)

const newString1 = "    Harsh    "
console.log((newString1))
console.log((newString1.trim()))//Removes unwanted spaces
