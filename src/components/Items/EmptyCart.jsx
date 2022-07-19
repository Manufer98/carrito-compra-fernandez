import { Button } from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const EmptyCart = () => {
	let navigate = useNavigate();
	return (
		<div className="hola">
			<div>
				<FiShoppingCart className="carts" color="#A27B5C" size={'70px'} />
				<h3>El carrito esta vacio</h3>
			</div>
			<Button className="bu" onClick={() => navigate('/	')}>
				Empezar a comprar
			</Button>
		</div>
	);
};

export default EmptyCart;
