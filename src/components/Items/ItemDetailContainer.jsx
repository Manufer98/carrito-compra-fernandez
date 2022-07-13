import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductos } from "../../firebase/FBProductos";
import ItemDetail from "./ItemDetail";


const ItemDetailCointainer = () =>{
	const {id} = useParams();
	const [loading, setLoading] = useState(true)
	const [item, setItem] = useState({});
	let navigate = useNavigate();

	useEffect(()=>{
		getData();
	},[id]);

	const getData = async () =>{
		try{
			const productos=await getProductos();
			const product=productos.find(i=>i.id===id);
			setItem(product)
			setLoading(false)
			if(product){
				setItem(product);
			}else{
				navigate("/NotFound")
			}
		}catch{
			console.log("Error")
		}
	}
	
	
	
	
	return (
		<div  style={{minHeight: '100vh'}}>
		 {loading ? <div className={loading ? "loading" : ""}></div> :
		  <ItemDetail item={item}  />
		}
        </div>
	)
}

export default ItemDetailCointainer;