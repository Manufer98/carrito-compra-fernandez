import React, { useEffect, useState } from "react";

const Test = ({desde}) =>{
	const [x,setX] = useState(desde)
	const [y,setY] = useState(desde)


	useEffect(() =>{
		alert("Primer Mount");

		//Dismount
		return () =>{
			alert("Se fue")
		}
	},[]);

	useEffect(() =>{
		console.log("render")
	})

	//Use effect cuando x es 10, solo toma en cuenta es estado de x
	useEffect(() =>{
		if(x==10){
			alert("10 es mucho")
		}
		
	},[x])




	return (
		<>

	<div>x: {x} y: {y}</div>


	<button  onClick={() =>{ 
	setX(x + 1)
	console.log(x)
	} }>Sumar X</button>

	<button  onClick={() =>{ 
	setY(y + 1)
	console.log(y)
	} }>Sumar Y</button>


	<button  onClick={() =>{ 
		if(x!=0){
	setX(x - 1)
	console.log(x)
}
	} }>Restar X</button>
	</>
	)
}
export default Test;