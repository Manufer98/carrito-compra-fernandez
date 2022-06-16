import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import CarritoNum from './CarritoNum';
import { Link } from 'react-router-dom';

const ItemCount = ({productName,initial,stock,onAdd,agregado,setAgregado}) =>{
	const [initialValue, setInitialValue] = useState(initial)
	const [stockValue, setStockValue] = useState(stock)
	const [cantidad, setCantidad]=useState(0);
	

	const getBadgeClasses = () =>{
		let classes="btn btn-secondary mt-3 " 
		classes+= (stockValue===0) ? "disabled" : ""
		return classes;
    }
	
	const getBadgeClassesPlus = () =>{
		let classes="block mx-4 " 
		classes+= (stockValue===0) ? "disabled" : ""
		return classes;
	}
	const getBadgeClassesMinus = () =>{
		let classes="d-inline-block mx-4 " 
		classes+= (initialValue<2) ? "disabled mx-4" : ""
		return classes;
	}

	
	return (
		<div className="con" >
		{agregado ?	
	    <Card className='text-center shadow-sm rounded'>
		<Card.Body>
		
		<Card.Text>
		{(stockValue!==0) ?  `Stock disponible: ${stockValue}` : "No hay stock"}
		</Card.Text>
		<div className='border rounded'>
		<Button variant="primary"  className={getBadgeClassesMinus()} onClick={() =>{
			
			setInitialValue(initialValue - 1)
		
		}}>-</Button>
		<div className="d-sm-inline-block  mx-4">{ initialValue}</div>
		<Button className={getBadgeClassesPlus()} onClick={() =>{
			if(initialValue !== stockValue){
				setInitialValue(initialValue + 1)
			}
		}} >+</Button>
		</div>
		<Button className={getBadgeClasses()}
		onClick={() =>{ 
			setStockValue(onAdd(initialValue,stockValue,productName))
			setInitialValue(1);
			setCantidad(initialValue+cantidad)
			setAgregado(false)

		}
		}>Agregar al carrito</Button>
		<CarritoNum num={cantidad}/>
		</Card.Body>
	</Card>  : <>
	<Link to="/cart"> <Button className="mt-3">Ir al carrito</Button> </Link>
	<Button onClick={()=> setAgregado(true)} className="mt-3  mx-2">Seguir comprando</Button>
	</>}
	
	</div>

	)
}
export default ItemCount;