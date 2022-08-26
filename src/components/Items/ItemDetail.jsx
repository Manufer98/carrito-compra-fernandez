import { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MiContexto } from '../../context/CartContext';
import ItemCount from './ItemCount';
import './ItemDetail.css';
const ItemDetail = ({ item }) => {
	const { id, pictureUrl, title, description, price, stock } = item;
	const [agregado, setAgregado] = useState(true);
	const [isIn, setIsIn] = useState(true);
	const { isInCart } = useContext(MiContexto);

	const onAdd = (initial, stock, productName) => {
		const result = stock - initial;
		alert(`Se ha${initial > 1 ? 'n' : ''} agregado ${initial} ${productName} `);

		return result;
	};
	useEffect(() => {
		if (isInCart(id)) {
			setIsIn(false);
		}
	}, []);

	return (
		<>
			<div>
				<h2 className="tit">Detalle</h2>
				<div className="split">
					<div>
						<img className="imgg" alt="Imagen detalle" src={pictureUrl && pictureUrl} />
					</div>
					<div className="detalle">
						<h2 className="informacion">{title && title}</h2>
						<h3 className="informacion">{description && description}</h3>
						<h5 className="informacion">Precio: ${price && price}</h5>
						{isIn ? (
							<ItemCount item={item} id={id} agregado={agregado} setAgregado={setAgregado} productName={title} initial={1} stock={stock} onAdd={onAdd} />
						) : (
							<div>
								<p>Este articulo ya esta en el carrito</p>
								<Link to="/cart">
									{' '}
									<Button>Ir al carrito</Button>{' '}
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default ItemDetail;
