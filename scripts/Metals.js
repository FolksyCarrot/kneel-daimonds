import { getMetals, setMetal, getOrderBuilder } from "./database.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            
            setMetal(parseInt(event.target.value))
            console.log(getOrderBuilder())
            
            
        }
    }
)

export const Metals = () => {
    let html = "<ul>"

   
    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}

