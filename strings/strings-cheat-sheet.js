// Strings
let firstName = "John"
let lastName = 'Doe'

// Defining Strings
let firstName = "John"
let firstName = new String("John")

// String Methods

// ==>length
let myString = "hello"
myString.length
//returns 5


// ==>charAt()
let myString = "hello"
myString.charAt(2)
//returns 'l'

// ==>charCodeAt()
let myString = "hello"
myString.charCodeAt(2)
//returns 108

// ==>concat()
let firstName = "John"
let lastName = " Doe"
firstName.concat(lastName)
//returns 'John Doe'

// ==>indexOf()
let firstName = "John"
firstName.indexOf('o')
//returns 1
firstName.indexOf('z')
//returns -1

// ==>lastIndexOf()
let fruit = "banana"
fruit.lastIndexOf('a')
//returns 5
fruit.lastIndexOf('z')
//returns -1