
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Orders } from "./Orders.js"
import { Metals } from "./Metals.js"
import { addCustomOrder } from "./database.js"
import { typeHTML } from "./types.js"






document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
        addCustomOrder()
        console.log('button click')
        
        }
    }
)

export const KneelDiamonds = () => {
    let orders = Orders()
    let metals = Metals()
    let jewelry = JewelryStyles()
    let size = DiamondSizes()
    
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                <p>${metals}</p>
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                <p>${size}</p>
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                <p>${jewelry}</p>
            </section>
        </article>

        <article>
            <section class = "choices__types options">
                <div> ${typeHTML()} </div>
            </section>
        </article>


        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            <p>${orders}</p>
        </article>
    `
}

