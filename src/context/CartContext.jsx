import { createContext, useState } from "react";
export const MiContexto = createContext({});

const CartContext = ({children}) =>{
const [darkMode, SetDarkMode] = useState("Hola");

	return(
	<MiContexto.Provider value={{ darkMode: darkMode, SetDarkMode: SetDarkMode }}>
		{children}
	</MiContexto.Provider>)

}

export default CartContext;