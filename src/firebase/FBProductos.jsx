
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
	const coleccion="items";

	export const getProductos = async () => {
		const db=getFirestore();
		const colleccionProductos=collection(db,coleccion);
		const res= await getDocs(colleccionProductos);
		const productos =res.docs.map(item=> ({id:item.id,...item.data()}));
		return productos;
	}
	export const getProducto = async (id) => {
		const db=getFirestore();
		const colleccionProducto=doc(db,coleccion,id);
		const res = await getDoc(colleccionProducto);
		const producto={id:res.id,...res.data()};
		return producto;
	}





  


