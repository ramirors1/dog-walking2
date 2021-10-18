import { getCities } from "./database.js"

// const walkers = getWalkers()
const city = getCities()

export const CityList = () => {
    let citiesHTML = "<ol>"

    // for (const walker of walkers) {
    for (const walkedCity of city){
        citiesHTML += `<li>${walkedCity.name}</li>`
    }
    
    citiesHTML += "</ol>"

    return citiesHTML
}

