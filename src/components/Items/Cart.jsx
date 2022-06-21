import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { MiContexto } from '../../context/CartContext';
const Cart = () =>{
	let navigate=useNavigate();
	const {getTotalPrice,deleteItem,emptyCarrito,cart}=useContext(MiContexto);

	return ( <div className='text-center'>
	<h1>Carrito</h1>
	{ cart.length>0 ?
	<>
	
	<div>

	{cart.map((item,index)=><p key={index} > <img src={item.pictureUrl} alt="Imagen detalle" onClick={()=>{const url="/item/"+item.id; navigate(url)}} width={100} height={50}/> {item.quantity} x {item.title} precio: {item.price} <button onClick={()=> deleteItem(item.id)}>eliminar</button> </p>)}
	<Button onClick={emptyCarrito}>Vaciar</Button>
	
	Total: {getTotalPrice()} </div>
	</>
	


 	: <div>
		<h3>El carrito esta Vacio</h3>
		<Button onClick={()=>navigate("/	")}>Empezar a comprar</Button>
		</div>}
	
	</div>)

}

export default Cart;