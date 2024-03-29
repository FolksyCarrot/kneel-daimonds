import { getStyles, setStyle } from "./database.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
            console.log("butoon clicked")
           
        }
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    
    const listItemsArray = styles.map(style => {
        return `<li> <input type="radio" name ="style" value = ${style.id} /> ${style.style} </li>`
    })


   
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}

