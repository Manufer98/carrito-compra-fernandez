import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi';
import { MiContexto } from '../../context/CartContext';
const CartWidget = () =>{
	const {getItemQuantity}=useContext(MiContexto);
	return (
		< >
		<Button  variant="outline-light"   > <FiShoppingCart size={"25px"}  color='grey' />
		<div style={{color:"white"}} >{getItemQuantity()}</div> </Button>
		</>
	)
}
export default CartWidget;