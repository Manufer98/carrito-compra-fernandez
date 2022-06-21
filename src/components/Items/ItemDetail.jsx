import { useState } from "react";
import ItemCount from "./ItemCount";
import "./ItemDetail.css";
const ItemDetail = ({item})=>{

const {id,pictureUrl,title,description,price} = item;
const [agregado, setAgregado] =useState(true);

const onAdd= (initial,stock,productName)=>{
	const result=stock - initial;
	alert(`Se ha${(initial>1) ? "n" : ""} agregado ${initial} ${productName} `);
	
	return result;

}

return(
		<>
		<h2 className="tit">Detalle</h2>
		 <div className="split">
		<div>
		<img alt="Imagen detalle" width={600} height={500} src={pictureUrl && pictureUrl} />
		</div>	
		<div className="detalle">
		<h2>{title && title}</h2>
		<h3>{description && description}</h3>
		<h5>Precio: ${price && price}</h5>
		<ItemCount item={item} id={id} agregado={agregado} setAgregado={setAgregado} productName={title} initial={1} stock={10} onAdd={onAdd}/>
		</div>
		</div>  
		</>

)

}

export default ItemDetail;