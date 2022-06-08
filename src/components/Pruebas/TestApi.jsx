import { useEffect, useState } from "react";

const TestApi = () =>{
	const [data,setData]=useState();

	useEffect(()=>{
		fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0",undefined)
		.then((resonse) =>resonse.json())
		.then((data) =>{
			console.log(data)
			setData(data)
		}).catch((e) => console.log(e)).finally(()=>{
			console.log("termino")
		});
	},[]);

	return (
       <>
		 <div className="mt-4">{data && data.results.map(i=><p>{i.name}</p>)}</div> 
		 </>
	)
}

export default TestApi;