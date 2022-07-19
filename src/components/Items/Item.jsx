import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Item = ({ id, description, title, price, pictureUrl }) => {
	return (
		<>
			<div key={id} className="sep">
				<div className="">
					<p className="title ">{title}</p>
					<Link to={'/item/' + id}>
						<img className="img" width={400} height={300} src={pictureUrl} alt="products" />
					</Link>
					<p className="description">{description}</p>
					<p className="border">Precio: {price}</p>

					<Button variant="dark">
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
