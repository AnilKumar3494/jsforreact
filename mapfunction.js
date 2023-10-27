//Adding something at the end of array

let namesArray = ["Anil", "Kumar", "Karapa"]
//to add Anil0, Kumar1, ...

function addNumToName(){
    for( let i = 0 ; i<=2; i++){
        namesArray[i] = namesArray[i]+ i
    }
    console.log(namesArray)
}

//Doing the same but better with map()
//map() - iterates the array and returns 
//map() used to iterate through and do something to the elements in the array
namesArray.map((grabEachName) => {
 console.log(grabEachName + "!")
}
)

//Application in React
namesArray.map((grabEachName) => {
    //Retuns a h1 tag with each name in array
    return <h1>{grabEachName}</h1>
})
