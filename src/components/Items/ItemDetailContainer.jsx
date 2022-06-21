import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";



const ItemDetailCointainer = () =>{
	const {id} = useParams();
	const [item, setItem] = useState({});
	let navigate = useNavigate();

	useEffect(()=>{

		fetch("../../productos.json", {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
		.then((response) => response.json())
		.then((data) =>{
			const product=data.find(i=>i.id===id);
		if(product){
			setItem(product);
		}else{
			navigate("/NotFound")
		}
		}).catch((e) => console.log("Error: " + e))
	},[id]);

	
	
	
	
	return (
		<>
		  <ItemDetail item={item} id={item.id} pictureUrl={item.pictureUrl} title={item.title} description={item.description} price={item.price} />
        
        </>
	)
}

export default ItemDetailCointainer;