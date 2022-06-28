import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getProductos } from "../../firebase/FBProductos";
import ItemList from "./ItemList";
import "./ItemListContainer.css";
const ItemListContainer = () =>{
	const [data, setData] =useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const {id} = useParams()
	
	useEffect (() =>{
		getData();
	
	},[])

	const getData = async () =>{
		try{
			const productos=await getProductos();
			setData(productos)
			setLoading(false)
			console.log(productos);
		}catch{
			console.log("Error")
			setError("Error");
		}
	}
	

	const a=data && data.filter(item=>item.category === id); 

	
	
	return (
	<>
	{id ? <><div className={loading ? "loading" : ""}></div> <ItemList data={a}/> </>: 
	<div className='con'>
	<div className={loading ? "loading" : ""}></div>
	<div className='text-center'>{error && "Ha ocurrido un error, vuelva a intertalo mas tarde"}</div>
	<ItemList data={data}/> 
	</div>	
	}		
	</>
	)
}
export default ItemListContainer;