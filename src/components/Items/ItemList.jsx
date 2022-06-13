import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ItemDetail from "./ItemDetail";
import "./ItemsList.css";
const ItemList = ({data}) =>{
	const [products,setProducts]=useState();
	const [item, setItem]=useState();
	
		useEffect(() =>{
			const handleProps=new Promise((res,rej)=>{
				res(data)
			})
	
			handleProps.then((values)=>{
				setProducts(values)
			}).catch((err)=>console.log(err))
		},[data]);

		const handleVer = (item) =>{
			setItem(item);
		}

		
		
	
	return(
		<>
		{item ? <ItemDetail item={item}/> : ""}
		<div className="containers">{products && products.map((item)=>
		<div key={item.id}  className="sep">
		<div className="">
		<p className="title ">{item.title}</p>
		<img onClick={()=>handleVer(item)} className="img" width={400} height={300} src={item.pictureUrl} alt="products" />
		<p className="description">{item.description}</p>
		<p className="border">Precio: {item.price}</p>
		<Button onClick={()=>handleVer(item)}>Ver Detalle</Button>
		</div>
		</div>
		)}</div>
		</>
		
	)
}

export default ItemList;