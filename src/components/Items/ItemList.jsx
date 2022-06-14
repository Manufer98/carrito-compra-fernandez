import { useEffect, useState } from "react";
import Item from "./Item";
import "./ItemsList.css";
const ItemList = ({data}) =>{
	const [products,setProducts]=useState();

	
		useEffect(() =>{
			const handleProps=new Promise((res,rej)=>{
				res(data)
			})
	
			handleProps.then((values)=>{
				setProducts(values)
			}).catch((err)=>console.log(err))
		},[data]);
		
		console.log(products)

		
		
	
	return(
		<>
		<div className="containers">{products && products.map((item)=>
		<Item id={item.id} title={item.title} pictureUrl={item.pictureUrl} description={item.description} price={item.price}/>		)}																	
		</div>
		</> 
		
		
	)
}

export default ItemList;