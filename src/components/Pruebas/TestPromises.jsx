import React, { useEffect, useState } from "react";
const TestPromises = () =>{
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [result, setResultado] =useState();

	useEffect(() =>{
		

		const pagara=new Promise((resolve,eject)=>{
			setTimeout(()=>{
			const s="sd";

			s ? resolve([
				{ id: "a01", name: "Producto 1", description: "Descripcion prod 1", stock: 100 },
				{ id: "a02", name: "Producto 2", description: "Descripcion prod 2", stock: 200 },
				{ id: "a03", name: "Producto 3", description: "Descripcion prod 3", stock: 300 },
				{ id: "a04", name: "Producto 4", description: "Descripcion prod 4", stock: 400 },
			  ]
	  ) : eject("sd");
		},3000)
		})
		
		//pagara.then((result)=>console.log(result)).catch((err)=>console.log(err))
	    
		const sd=async () =>{
			try{
			const s=await pagara;
			setResultado(s)
			setLoading(false)
			console.log(s)
		}catch(e){
			console.log(e)
			setError(true);
			setLoading(false)
		}
		}
		sd();
	},[])

	return(
		<>
		<div>{loading && "Loading..."}</div>
		<div>{error && "Error"}</div>
		<div>{result && result.map(r=><p key={r.id}>el id es: {r.id} y su nombre es {r.name}</p>)}{/* <p>El cliente {result.name} pago el monto {result.monto}</p>} */}</div>
		</>
	)
}

export default TestPromises;