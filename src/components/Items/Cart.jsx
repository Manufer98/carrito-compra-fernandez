import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { MiContexto } from '../../context/CartContext';
import "./Cart.css";
import EmptyCart from './EmptyCart';
const Cart = () =>{
	let navigate=useNavigate();
	const {getTotalPriceItems,qtyMinus,qtyPlus,getTotalPrice,deleteItem,emptyCarrito,cart}=useContext(MiContexto);
	

	return ( 
		<section className="vh-100" style={{backgroundColor: "#2C3639"}}>
		 {/* 	<p className='text-center'><span className="h2 hol text-center">Carrito </span><span className="h4 hol">( {cart.length} item )</span></p> */}

			{cart.length>0 ? 
			<>
			{cart.map((item,index)=> 
			<div key={index}>
			<div className="container h-100" >
		  <div  className="row d-flex justify-content-center align-items-center h-100">
			<div className="col" >
			 
	  
			  <div style={{backgroundColor: "#3F4E4F"}}className="card ">
				<div className="card-body p-4 hol">
	  
				  <div className="row align-items-center">
					<div className="col-md-2">
					  <img style={{borderRadius: "15px", cursor:"pointer"}} onClick={()=>{const url="/item/"+item.id; navigate(url)}} src={item.pictureUrl}
						className="img-fluid" alt="Generic placeholder image"/>
					</div>
					<div className="col-md-2 d-flex justify-content-center">
					  <div>
						<p  className="small mb-4 pb-2">Producto</p>
						<p className="lead fw-normal mb-0">{item.quantity} x {item.title}</p>
					  </div>
					</div>
					<div className="col-md-2 d-flex justify-content-center">
					  <div>
						<p className="small  mb-4 pb-2">Precio unitario</p>
						<p className="lead fw-normal mb-0"><i className="fas fa-circle me-2" style={{color: "#fdd8d2"}}></i>
						 ${item.price}</p>
					  </div>
					</div>
					<div className="col-md-2 d-flex justify-content-center">
					  <div>
						<p className="small  mb-4 pb-2">Precio Total</p>
						<p className="lead fw-normal mb-0"> ${getTotalPrice(item)}</p>
					  </div>
					</div>
					<div className="col-md-2 d-flex justify-content-center">
					  <div>
					  <div className="coun">
					<Button onClick={()=>qtyMinus(item)}>-</Button>
 						<div style={{color: "#fdd8d2"}} className="countt">{item.quantity}</div>
 		
		 			<Button  onClick={()=>qtyPlus(item)}>+</Button>
		
 					</div>
					  </div>
					</div>
					<div className="col-md-2 d-flex justify-content-center">
					  <div>
					  <Button style={{marginTop:"50px"}} onClick={()=> deleteItem(item.id)}>Eliminar</Button> 
					  </div>
					</div>
				  </div>
	  
				</div>
			  </div>
	  
			 
	  
			</div>
		  </div>   
		  
			</div>
			</div>
			)}
			 <div className="card mb-5" style={{backgroundColor:"#DCD7C9"}}>
				<div className="card-body p-4">
	  
				  <div  className="float-end">
					<p className="mb-0 me-5 d-flex align-items-center">
					  <span  className="small text-muted me-2">Importe Total:</span> <span
						className="lead fw-normal">{getTotalPriceItems()}</span>
					</p>
				  </div>
	  
				</div>
			  </div>
	  
			  <div className="d-flex justify-content-end">
			  <Button >Finalizar Compra</Button>
				<Button onClick={emptyCarrito} style={{backgroundColor:"#DCD7C9",color:"#2C3639"}}  className="btn btn-light  me-2">Vaciar Carrito</Button>
			
			  </div> 
			  </>
			: <EmptyCart/>
			
			
			}


	  	</section> 
	  
		
	)
	{/* <div className='container cons'>
	<h1 className='titulo text-center'>Carrito</h1>
	{ cart.length>0 ?
	<>
	
	<div className='hola'>
	<div className='label'>

	<h6>Producto</h6>
	<h6>Precio total:</h6>
	</div>
	<div className='hr'></div>
	{cart.map((item,index)=><div className='items' key={index} > 
	<img style={{borderRadius: "15px", cursor:"pointer",marginTop:"8px",marginBottom:"8px"}}src={item.pictureUrl} alt="Imagen detalle" onClick={()=>{const url="/item/"+item.id; navigate(url)}} width={90} height={60}/>
	<p className='desc'>
		
	{item.quantity} x {item.title} ${item.price}  
	</p>
	<div className="coun">
	<Button onClick={()=>qtyMinus(item)}>-</Button>
 		<div className="countt">{item.quantity}</div>
 		
		 <Button onClick={()=>qtyPlus(item)}>+</Button>
		
 		</div>
		 ${getTotalPrice(item)}
	<Button onClick={()=> deleteItem(item.id)}>eliminar</Button> 
	</div>)}
	</div>
	<div className='info'>
	<Button onClick={emptyCarrito}>Vaciar</Button>
	
	Total: {getTotalPriceItems()}
	</div>
	</>
	


 	: <div className='hola'>
		<h3>El carrito esta Vacio</h3>
		<Button onClick={()=>navigate("/	")}>Empezar a comprar</Button>
		</div>}
	
	</div> */}
	
	
	

}

export default Cart;