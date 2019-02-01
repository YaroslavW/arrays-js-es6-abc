//=== Arrays are useful for storing collections of elements where order is important.
let names = ["Steve", "Bob", "Sam", "Erick"]

names[0] //returns "Steve"
names[2] //returns "Sam"

// Defining Arrays
let scores = [87,43,88,99]
// or
let scores = new Array(87, 43, 88, 99)

// ===Accessing Array Elements
let scores = [87,43,88,99]

scores[0] // returns 87
scores[1] // returns 43
scores[2] // returns 88

// ==Looping Through Array Elements
let scores = [87,43,88,99]

scores.forEach((x) => {
  console.log(x)
})
//logs 87, 43, 88, 99

//=====>>>>Other Array Methods

// ==> concat()
let scores = [87, 43, 88, 99]
let moreScores = [100,33,78,44]

scores.concat(moreScores)
//returns [87, 43, 88, 99, 100, 33, 78, 44]


// ==>every()
let scores = [87, 43, 88, 99]

scores.every((x) => { return x > 10 })
//returns true since every element is greater than 10


// ==>filter()
let scores = [87, 43, 88, 99]

scores.filter((x) => { return x > 80 })
//returns [87, 88, 99]


// ==>indexOf()
let scores = [87, 43, 88, 99]

scores.indexOf(88) //returns 2
scores.indexOf(103) // returns -1

// ==>join()
let scores = [87, 43, 88, 99]

scores.join() //returns "87,43,88,99"
scores.join("|") //returns "87|43|88|99"

// ==>lastIndexOf()
let scores = [87, 43, 88, 99, 88]

scores.lastIndexOf(88) //returns 4
scores.lastIndexOf(11) //returns -1

// ==>map()
let scores = [87, 43, 88, 99]

scores.map((x) => {return x + 10})
//returns [97, 53, 98, 109]


// ==>pop()
let scores = [87, 43, 88, 99]

scores.pop() //returns 99
//scores now equals [87, 43, 88]


// ==>push()
let scores = [87, 43, 88, 99]

scores.push(44) //returns 5
//scores now equals [87, 43, 88, 99, 44]


// ==>reduce()
let count = [1,2,3,4]

count.reduce((a,b) => {return a + b})
//returns 10


// ==>reduceRight()
let count = [1,2,3,4]

count.reduceRight((a,b) => {return a - b})
//returns -2


// ==>reverse()
let scores = [87, 43, 88, 99]

scores.reverse()
//returns [99, 88, 43, 87]


// ==>shift()
let scores = [87, 43, 88, 99]

scores.shift() //returns 87
//scores now equals [43, 88, 99]


// ==>slice()
let scores = [87, 43, 88, 99]

scores.slice(1,3)
//returns [43,88]


// ==>some()
let scores = [87, 43, 88, 99]

scores.some((x) => {return x < 50}) //returns true
scores.some((x) => {return x < 40}) //returns false


// ==>sort()
let scores = [87, 43, 88, 99]

scores.sort() //returns [43, 87, 88, 99]
scores.sort((a,b) => {return b - a}) // returns [99, 88, 87, 43]


// ==>splice()
let scores = [87, 43, 88, 99]

scores.splice(2, 0, 95) //returns []

//scores now equals [87, 43, 95, 88, 99]

let counts = [1, 2, 3, 4, 5]

counts.splice(1, 3) //returns [2,3,4]

//scores now equals [1,5]


// ==>toString()
let scores = [87, 43, 95, 88, 99]

scores.toString()
//returns '87,43,95,88,99'


// ==>unshift()
let scores = [87, 43, 95, 88, 99]

scores.unshift(50,70) //returns 7
//scores now equals [50, 70, 87, 43, 95, 88, 99]



// ==>find()
let scores = [87, 43, 95, 88, 99]

scores.find((x) => {return x > 90})
//returns 95


// ==>findIndex()
let scores = [87, 43, 95, 88, 99]

scores.findIndex((x) => {return x > 90})
//returns 2


// ==>entries()
let scores = [87, 43, 95, 88, 99]

var entries = scores.entries()

console.log(entries.next().value) //returns [0, 87]
console.log(entries.next().value) //returns [1, 43]


// ==>from()
let nameArray = Array.from('Sam')

console.log(nameArray)
//logs ['S', 'a', 'm']


// ==>keys()
let scores = [87, 43, 95, 88, 99]
let iterator = scores.keys();

console.log(iterator.next())
//logs {value: 0, done: false}
