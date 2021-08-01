import { getTypes, setTypes, getOrderBuilder } from "./database.js";

const typeArray = getTypes()

document.addEventListener(
    "change", (event) => {
        if (event.target.name === "types") {
            setTypes(parseInt(event.target.value))
        }
    }
)

export const typeHTML = () => {
    let HTML ="<ul>"
    for (const type of typeArray) {
        HTML += `<li><input type="radio" name="types" value="${type.id}">${type.value}</li>`
        
    }
    HTML += "</ul>"
    return HTML
}