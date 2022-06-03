
const Mostrar = ({arr}) =>{

	return (<div>
	{arr.map(i=><p onClick={() => console.log(i)} key={i}>{i}</p>)}
	</div>
	)
}
export default Mostrar;