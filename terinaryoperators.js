//in react we can write Js directly in HTML but it is called JSX

//General if else statements
let age = 18;
let name = "Anil"
if(age<18){
    name = "Anil Jr"
}else{
    name = "Mr.Anil"
}
console.log(name)


//now using 'terinary operator'
let myAge = 10;
let myName = myAge > 10 && "Anil"; //If my age is > 10 then name is Anil && - if true
let myName2 = myAge > 18? "Mr.Anil" : "Anil Jr"; //If myAge is > 18 then I am Mr.Anil else I am Anil Jr
console.log(myName2)


//APPLICATION IN REACT
const MyNameComponent = () => {
    //rendering a <div></div> conditionally!!
    return myAge > 18? <div>His name is Mr.Anil</div> : <div>His name is Anil Jr</div>
}