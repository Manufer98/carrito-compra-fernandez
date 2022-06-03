import Mostrar from "./Mostrar";

const ListadoCointeiner = () =>{
	const arr=[1,2,3,4]
	arr.push(6)
	return (
	<Mostrar arr={arr}/>
	)
}
export default ListadoCointeiner;