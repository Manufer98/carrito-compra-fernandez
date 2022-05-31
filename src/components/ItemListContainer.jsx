
const ItemListContainer = ({fun,greeting}) =>{
	return (
	<div className="text-center" onClick={() =>fun(greeting)}>{greeting}</div>
	)
}
export default ItemListContainer;