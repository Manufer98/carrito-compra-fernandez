import Item from './Item';
import './ItemsList.css';
const ItemList = ({ data }) => {
	return (
		<>
			<div className="containers">
				{data && data.map((item) => <Item key={item.id} id={item.id} title={item.title} pictureUrl={item.pictureUrl} description={item.description} price={item.price} />)}
			</div>
		</>
	);
};

export default ItemList;
