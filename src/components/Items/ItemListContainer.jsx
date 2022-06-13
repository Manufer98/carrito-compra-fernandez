import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "./ItemListContainer.css";
const ItemListContainer = () =>{
	const [data, setData] =useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	useEffect (() =>{
		
		const list=new Promise((resolve,reject)=>{
			

			setTimeout(() =>{
			 resolve([
					{ id: "1", title: "Iphone", description:"Iphone 10XS", price: 1200, pictureUrl : "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" },
					{ id: "2", title: "Mac", description:"IOS 20 i5", price: 2500, pictureUrl : "https://images.unsplash.com/photo-1527443195645-1133f7f28990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
					{ id: "3", title: "Ipad", description:"Ipad 15R", price: 800, pictureUrl : "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80" },
					{ id: "4", title: "Apple TV", description:"Gen 3", price: 250, pictureUrl : "https://images.unsplash.com/photo-1621685950846-9323d993bbf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
				  ]
		  )  
		  
			},2500)
		})

		list.then((result)=>{
		setData(result)
		})
		.catch((err)=>{
			setError(true);
		 	console.log(err)})
		.finally(()=>setLoading(false))
	
	},[])

	
	return (
	<>
	<div className={loading ? "loading" : ""}></div>
	<div className='text-center'>{error && "Ha ocurrido un error, vuelva a intertalo mas tarde"}</div>
	<ItemList data={data}/> 			
	</>
	)
}
export default ItemListContainer;