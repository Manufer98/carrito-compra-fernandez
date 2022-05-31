import React from "react";

const Props = ({ msg, fun}) =>{
	const saludar=`${msg}`
	return <p onClick={() =>fun(saludar)}>{msg}</p>
}

export default Props;
