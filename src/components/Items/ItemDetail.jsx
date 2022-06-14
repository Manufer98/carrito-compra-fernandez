import "./ItemDetail.css";

const ItemDetail = ({pictureUrl,title,description,price})=>{


return(
		<>
		<h2 className="tit">Detalle</h2>
		 <div className="split">
		<div>
		<img width={600} height={500} src={pictureUrl && pictureUrl} alt="image"/>
		</div>	
		<div className="detalle">
		<h2>{title && title}</h2>
		<h3>{description && description}</h3>
		<p>Precio: {price && price}</p>
		</div>
		</div>  
		</>

)

}

export default ItemDetail;