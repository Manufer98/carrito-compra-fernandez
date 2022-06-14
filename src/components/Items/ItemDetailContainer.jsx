import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


const ItemDetailCointainer = () =>{
	const {id} = useParams();
	const [item, setItem] = useState({});

	useEffect(()=>{

		fetch("../../productos.json", {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
		.then((response) => response.json())
		.then((data) =>{
			//console.log(data)
			setItem(data.find(i=>i.id==id))
		}).catch((e) => console.log("Error: " + e))
	},[id]);

	
	console.log(item.id)
	
	return (
		<>
		  <ItemDetail id={item.id} pictureUrl={item.pictureUrl} title={item.title} description={item.description} price={item.price} />
        
        </>
	)
}

export default ItemDetailCointainer;