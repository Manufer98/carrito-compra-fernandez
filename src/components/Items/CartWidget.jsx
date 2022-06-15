import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi';
const CartWidget = () =>{
	
	return (
		<div >
		<Button   bg="ligth " variant="outline-light"   > <FiShoppingCart size={"25px"}  color='grey' /></Button> 
		
		</div>
	)
}
export default CartWidget;