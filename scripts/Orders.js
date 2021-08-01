import { getOrders, getTypes } from "./database.js"
import { getMetals } from "./database.js"
import { getSizes } from "./database.js"
import { getStyles } from "./database.js"


import { getTypes } from "./types.js"

const buildOrderListItem = (order) => {

    const metals = getMetals()
        const foundMetal = metals.find(
            (metal) => {
                return metal.id === order.metalId
            }
        )

    const sizes = getSizes()
        const foundSize = sizes.find(
            (size) => {
                return size.id === order.sizeId
            }
        )

    const styles = getStyles()
        const foundStyle = styles.find(
            (style) => {
                return style.id === order.styleId
            }
        )
        
    const getTypes = getTypes()  


 const totalCost = foundMetal.price + foundSize.price + foundStyle.price
//check type id and if typed === 1, then totalcost * 1, if id === 2, then totalcost * 2, else if id === 3, then totalcost * 4
 
    for (const type of getTypes) {
        let sum = totalCost
            if (type.id === 1) {
                sum = totalCost * 1
            }else if (type.id === 2) {
                sum = totalCost * 2
            } else if (type.id === 3){
                sum = totalCost * 4
            }
        return sum
        
    }


const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}


 
export const Orders = () => {
    
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

