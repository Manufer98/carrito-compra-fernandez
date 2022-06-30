import { addDoc, collection, getFirestore } from "firebase/firestore";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { MiContexto } from '../../context/CartContext';
import "./Checkout.css";
const CheckOut = () => {
	const {cart,getTotalPriceItems,emptyCarrito}=useContext(MiContexto);
	const[formularioEnviado, SetFormularioEnviado]=useState(false);
	const [idCompra,setIdCompra]=useState("");
	const navigate = useNavigate();	

	useEffect(()=>{
		if(!cart.length){
			navigate("/")
		}
	},[])

	return (
	<div className="text-center">	
		

		{!idCompra ? (
		<Formik
			initialValues={{
				name:"",
				phone:"",
				email:""
			}}
			validate={(values)=>{
				let errors={};

				//validacion nombre
				if(!values.name){
					errors.name ="Ingrese un nombre";
				}else if(!/^[a-zA-ZÁ-ÿ\s]{1,48}$/.test(values.name)){
					errors.name ="El nombre solo puede contener letras y espacios"
				}

				//validacion phone
				if(!values.phone){
				errors.phone ="Ingrese un telefono";
				}else if(!/^[0-9\+]{1,}[0-9\-]{3,15}$/.test(values.phone)){
				errors.phone ="Ingrese un telefono valido "
				}
				
 
				//validacion email
				if(!values.email){
					errors.email ="Ingrese un email";
				}else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
					errors.email ="Ingrese correctamente el email"
				}

				
				return errors;
			}}
			onSubmit={(values,{resetForm})=>{
			
				SetFormularioEnviado(true);
				/* setTimeout(()=>SetFormularioEnviado(false),3000) */

				const db=getFirestore();
				const orderCollection=collection(db,"orders")


				/* const buyer={...values}
				const items=[...cart] */
				const total=getTotalPriceItems();
				const check={
					buyer:{...values},
					items:[...cart],
					total
				}
				addDoc(orderCollection,check).then(({id})=>{
					setIdCompra(id);
					emptyCarrito();
				})

				
				console.log(check)

				

			}}
		>  
			{({values,errors, touched,handleSubmit,handleChange,handleBlur})=>(
				<Form className="formulario" onSubmit={handleSubmit}>
					<div>
						<label htmlFor="name">Nombre</label>
						<Field 
							type="text"  
							id="name" 
							name="name" 
							placeholder="John Doe" 
							
							/>
							<ErrorMessage name="name" component={()=>(
								 <div className="errors">{errors.name}</div>
							)}/>
							
					</div>
					<div>
						<label htmlFor="phone">Phone</label>
						<Field 
							type="text"  
							id="phone" 
							name="phone" 
							placeholder="098165412" 
							
							/>
								<ErrorMessage name="phone" component={()=>(
								 <div className="errors">{errors.phone}</div>
							)}/>
					</div>
					<div>
						<label htmlFor="email">Email</label>
						<Field 
							type="text"  
							id="email" 
							name="email" 
							placeholder="John@gmail.com" 
							
							/>
							<ErrorMessage name="email" component={()=>(
								 <div className="errors">{errors.email}</div>
							)}/>
					</div>
					{formularioEnviado ?<div className= "loadingcheck"></div>: <button  type="submit">Enviar</button>  }
					
				</Form>
		)}
		
		</Formik>)

		: (<div className="cont"><div className="algo"><div className="checkoutInfo">Su compra ha sido enviada con el codigo: {idCompra}</div></div></div>	)}
	
	</div>

	
  )
}

export default CheckOut