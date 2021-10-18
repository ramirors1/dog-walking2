import { getWalkers, getCities } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {  //
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {  //grab each walker individually 
                if (walker.id === parseInt(walkerId)) {  //confirming that id matches walker id,  parseInt converts string into a number to compare the id's
                    for (const city of cities){  //grabbing each city object from city array
                        if (walker.cityId === city.id) {  //comparing walker city id to city id
                    
                    window.alert(`${walker.name} services ${city.name}`)  //if true, will display window alert
                    }
                }
            }
        }
    }
}
)

const walkers = getWalkers()
const cities = getCities()

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML

}

