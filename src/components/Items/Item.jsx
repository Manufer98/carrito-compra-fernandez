import "./Item.css";
const Item = ({item})=>{

return(
		<>
		<h2 className="tit">Detalle</h2>
		<div className="split">
		<div>
		<img width={600} height={500} src={item.pictureUrl} alt="image"/>
		</div>	
		<div className="detalle">
		<h2>{item.title}</h2>
		<h3>{item.description}</h3>
		<p>Precio: {item.price}</p>
		</div>
		</div>
		</>

)

}

export default Item;