import { createContext, useState } from "react";
export const MiContexto = createContext({});

const CartContext = ({children}) =>{
const [cart,setCart] = useState([]);


const isInCart = (id) =>{
   return cart.some(i=>i.id===id);
}

const addItem = (item,quantity)=>{

	const newItem={
		...item,
		quantity
	}


	if(isInCart(newItem.id)){
		const findProduct=cart.find(i=>i.id===newItem.id)
		const productIndex=cart.indexOf(findProduct);
		const auxArray=[...cart];
		auxArray[productIndex].quantity+=quantity;
		setCart(auxArray);

		


	}else{
	setCart([...cart,newItem]);		
}
	
	console.log(cart)
	
}

const emptyCarrito=() =>{
	setCart([]);

}
const deleteItem=(id)=>{
	const filter=cart.filter(i=>i.id!==id);
	setCart(filter);
}

const getTotalPrice= () =>{
	return cart.reduce((acc,item)=>{
		return acc+=item.price*item.quantity;
	},0)

}
const getItemQuantity= () =>{
	return cart.reduce((acc,item)=>{
		return acc+=item.quantity;
	},0)
	

}


	return(
	<MiContexto.Provider value={{getItemQuantity,getTotalPrice,deleteItem,emptyCarrito,cart, setCart, addItem }}>
		{children}
	</MiContexto.Provider>)

}

export default CartContext;