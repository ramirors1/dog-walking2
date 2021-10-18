import { getPets, getWalkers, getCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const cities = getCities()

// Function whose responsibility is to find the walker assigned to a pet
const findPetWalker = (pet, allWalkers) => {  //defining findPetWalker and using pet and allWalkers as parameters
    let petWalker = null  //petWalker set to null which will let petWalker be equal to any value

    for (const walker of allWalkers) {  //finding a specific walker
        if (walker.id === pet.walkerId) {  //matching the walker to the pet by the id 
            petWalker = walker  //will be the value of the variable
        }
    }
        
    return petWalker  //returning makes it the value of the function
}

const findCity = ( cities, allWalkers) => {  //defines findCity using cities and allWalkers as parameters
    let cityWalked = null  //cityWalked set to null which will let cityWalked be equal to any value 

    // for (const walker of allWalkers) {
        for (const city of cities) {
        if (allWalkers.cityId === city.id) {
            cityWalked = city
            }
    // }
}
    return cityWalked
}

export const Assignments = () => {
    let assignmentHTML = "<ul>"
    assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findPetWalker(currentPet, walkers)
        const currentPetCity = findCity(cities, currentPetWalker)  //finding the city of the array of cities
        // for (const walker of walkers) {

        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${currentPetCity.name}
            </li>
        `
    
}
    

    assignmentHTML += "</ul>"

    return assignmentHTML
}

