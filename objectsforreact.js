//Object named person
const person ={
    firstName: "Anil Kumar",
    lastName: "Karapa",
    personAge: 20,
    isMarried: false
}

//to use properties of object person 
console.log("Are you working? " + person.firstName)
console.log(person.personAge) 

/* 
//Assigning variables to property in Object person - it is a long way - 'more lines of code'
firstName = person.firstName
lastName = person.lastName
personAge = person.personAge
isMarried = person.isMarried

console.log("Hello" + " " + firstName)
 */

//All of the can be done simply by destructuring the Object - 'person'
const {firstName, lastName, personAge, isMarried} = person
console.log("Obtained from destructuring: " + "Hello!!" + " " + firstName)


//MORE OBJECT USES

//EXAMPLE OF TWINS ====

//Object 1 - Twin 1
const twinone = {
    twinName: "Seetha", 
    twinAge: 21,
    twinSchool: "Drexel University"
}

//Object 2 - Twin 2 -- Has same properties as twin 1 expect for name
const twintwo ={...twinone, twinName: "Geetha"}

const {twinName, twinAge, twinSchool} = twinone
const {twinTwoName, twinTwoAge, twinTwoSchool} = twintwo //this is not working!!!

console.log("Name of twins are: " + twinName)
console.log("Name of twin two: " + twinTwoName)