import { Link, useParams } from "react-router-dom";
const TestProducto = () =>{
	
	

	const{id}=useParams();
	

	
  	
	return (
		<>
	<h1>{id}</h1>

	
	<Link to={"/"}>Volver</Link>
	</>)
}

export default TestProducto;