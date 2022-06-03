import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import ItemCount from "./ItemCount";
const ItemListContainer = ({fun,greeting}) =>{
	
	return (
		
		<>
	<div className="text-center" onClick={() =>fun(greeting)}>{greeting}</div>
	<Container>
		<Row >
			<Col >
			<ItemCount productName="Camisa Tiger" stock={5} initial={1}/>
			</Col>
			<Col>
			<ItemCount productName="Pantalon Pepe" stock={8} initial={1}/>
			</Col>
		</Row>
		<Row className='mt-4'>
		<Col>
			<ItemCount productName="Buzo Adidas" stock={7} initial={1}/>
			</Col>
			<Col>
			<ItemCount productName="Guante Azul" stock={10} initial={1}/>
			</Col>
			</Row>
			</Container>
	</>

	)
}
export default ItemListContainer;