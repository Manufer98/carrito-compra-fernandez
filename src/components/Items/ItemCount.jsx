import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
const ItemCount = ({productName,initial,stock}) =>{
	const [initialValue, setInitialValue] = useState(initial)
	const [stockValue, setStockValue] = useState(stock)
	
	const onAdd = () =>{

		if(initialValue<=stockValue){
			alert("Se han agregado "+initialValue + " "+productName);
			setStockValue(stockValue-initialValue);
			setInitialValue(1);
		}
	}

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
		<>
	    <Card className='text-center m-3 h-100 shadow-sm rounded'>
		<Card.Body>
		<Card.Title>
		<div>{productName}</div>
		</Card.Title>	
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
		onClick={() => onAdd()}>Agregar al carrito</Button>
		</Card.Body>
	</Card>
	
	</>

	)
}
export default ItemCount;