import Order from "../../types/Order";

// I wanted to keep the overall computations small and not recast the data into a new format,
// so I applied a simple sort within each order to place the largest quantity items first.
const sortArray = (array: Array<Order>) => {
    for (let x in array){
        array[x].products.sort((a,b)=>b.quantity-a.quantity)
    }
    return array;
}

const ItemController = {
    sortArray:sortArray
}

export default ItemController;