import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])
    const [des, setDes] = useState(0)

    const addItem = (item : MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if(itemExist){
            const updatedOrder = order.map (orderItem => orderItem.id === item.id ?
                {...orderItem, quantity: orderItem.quantity + 1} : orderItem)
                setOrder(updatedOrder)

        }else{
        const newItem = {...item, quantity: 1}
        setOrder([...order, newItem])
    }
}
function incrementItem(id: number) {
    setOrder(currentOrder => 
      currentOrder.map(item => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }
  
  function decrementItem(id: number) {
    setOrder(currentOrder => 
      currentOrder.map(item => 
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  }

    const removeItem = (id: MenuItem['id']) =>{
        setOrder(order.filter(item => item.id !== id))
    }

    return{
        order,
        des,
        setDes,
        addItem,
        incrementItem,
        decrementItem,
        removeItem
    }
}