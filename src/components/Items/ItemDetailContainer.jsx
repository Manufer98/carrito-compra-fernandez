import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProducto } from '../../firebase/FBProductos';
import ItemDetail from './ItemDetail';

const ItemDetailCointainer = () => {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [item, setItem] = useState({});
	let navigate = useNavigate();

	useEffect(() => {
		getData();
	}, [id]);

	const getData = async () => {
		try {
			const producto = await getProducto(id);
			setItem(producto);
			setLoading(false);
			if (producto) {
				setItem(producto);
			} else {
				navigate('/NotFound');
			}
		} catch {}
	};

	return <div style={{ backgroundColor: '#808d8e', minHeight: '100vh' }}>{loading ? <div className={loading ? 'loading' : ''}></div> : <ItemDetail item={item} />}</div>;
};

export default ItemDetailCointainer;
