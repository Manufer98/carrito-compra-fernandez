
import { collection, getDocs, getFirestore } from "firebase/firestore";

	export const getProductos = async () => {
		const coleccion="items";
		const db=getFirestore();
		const colleccionProductos=collection(db,coleccion);
		const res= await getDocs(colleccionProductos);
		const productos =res.docs.map(item=> ({id:item.id,...item.data()}));
		return productos;
	}


  


