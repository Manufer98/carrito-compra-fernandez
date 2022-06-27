import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { MiContexto } from '../../context/CartContext';
const Item = ({id, description,title,price,pictureUrl}) =>{
	const {darkMode,SetDarkMode}=useContext(MiContexto);
	
/* 	console.log(darkMode) */
	return (
		<>
		<div key={id}  className="sep">
			
		{/* <button onClick={()=>SetDarkMode("que")}>Cambiar</button> */}
		<div className="">
		<p className="title ">{title}</p>
		<Link to={"/item/"+id}>
		<img  className="img" width={400} height={300} src={pictureUrl} alt="products" />
		</Link>
		<p className="description">{description}</p>
		<p className="border">Precio: {price}</p>
		
		<Button variant="dark"><Link className="link" to={"/item/"+id}>Ver Detalle</Link></Button>
		</div>
		</div>
		
		
		</>
	)
}

export default Item;