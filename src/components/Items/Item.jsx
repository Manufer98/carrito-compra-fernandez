import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Item = ({ id, description, title, price, pictureUrl }) => {
	return (
		<>
			<div key={id} className="sep">
				<div className="">
					<h2 className="title">{title}</h2>
					<Link to={'/item/' + id}>
						<img className="img" width={400} height={300} src={pictureUrl} alt="products" />
					</Link>
					<p className="description">{description}</p>
					<p className="price">Precio: {price}</p>

					<Button className="btn" variant="dark">
						<Link className="link" to={'/item/' + id}>
							Ver Detalle
						</Link>
					</Button>
				</div>
			</div>
		</>
	);
};

export default Item;
