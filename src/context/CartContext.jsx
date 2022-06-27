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

const getTotalPriceItems= () =>{
	return cart.reduce((acc,item)=>{
		return acc+=item.price*item.quantity;
	},0)

}

const getTotalPrice= (item) =>{
	return item.price * item.quantity;

}


const getItemQuantity= () =>{
	return cart.reduce((acc,item)=>{
		return acc+=item.quantity;
	},0)
	
}

 const qtyPlus=(item) =>{
	const indexItem=cart.indexOf(item);
	
	const auxArray=[...cart]
	if(auxArray[indexItem].quantity<10 ){
	auxArray[indexItem].quantity++;
	setCart(auxArray); 
	}
	
 }
 const qtyMinus=(item) =>{
	const indexItem=cart.indexOf(item);
	
	
	const auxArray=[...cart]
	if(auxArray[indexItem].quantity>1 ){
		
	auxArray[indexItem].quantity--;
	setCart(auxArray);
 }
	
 }


	return(
	<MiContexto.Provider value={{getTotalPriceItems,qtyMinus,qtyPlus,getItemQuantity,getTotalPrice,deleteItem,emptyCarrito,cart, setCart, addItem }}>
		{children}
	</MiContexto.Provider>)

}

export default CartContext;