import React from "react"
import { Item } from "./Item"

export function ItemList({ items }) {
    return (
        <section className="grid w-full xl:w-[75vw] 2xl:w-[60vw] place-items-center">
            <div className="p-2 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-around w-full place-items-center">
                {items.itemList.map((item) => <Item item={item} key={item._id} />)}
            </div>
        </section>
    )
}