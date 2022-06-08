import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Item from "./Item";
import "./ItemsList.css";
const ItemList = ({data}) =>{
	const [d,setD]=useState();
	const [loading, setLoading] = useState(true);
	const [loadItem, setLoadItem]=useState(false);
	const [item, setItem]=useState();
	
		useEffect(() =>{
			const handleProps=new Promise((res,rej)=>{
				res(data)
			})
	
			handleProps.then((values)=>{
				console.log(values)
				setD(values)
				
			})
		},[data]);

		const handleVer = (item) =>{

			setLoadItem(true);
			setItem(item);
			console.log(item)


		}
		
	
	return(
		<>
		{item ? <Item item={item}/> : ""}
		<div className="containers">{d && d.map((item)=>
		<div key={item.id}  className="sep">
		<div className="">
		<p className="title ">{item.title}</p>
		<img onClick={()=>handleVer(item)} className="img" width={400} height={300} src={item.pictureUrl} alt="image" />
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