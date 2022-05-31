import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi';
const CartWidget = ({num}) =>{
	
	return (
		<div >
		<Button className="mb-1"  bg="ligth " variant="outline-light"   > <FiShoppingCart size={"25px"} className="my-auto" color='grey' /></Button> 
		 
		 <Button variant="dark">{num}</Button>
		 </div>
	)
}
export default CartWidget;