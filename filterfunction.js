const namesArray = ["AK", "Anil", "Liii", "Kii", "AK", "Anil"]

//to remove repeated elements in the array

namesArray.filter( (grabElementsInArray) => {
    return grabElementsInArray !== "Anil"
})

console.log(namesArray)