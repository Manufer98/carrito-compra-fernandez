import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Items/Cart";
import ItemDetailCointainer from "./components/Items/ItemDetailContainer";
import ItemListContainer from "./components/Items/ItemListContainer";
import NotFound from "./components/Items/NotFound";
import Navbar from "./components/NavBar/NavBar";
import CartContext from "./context/CartContext";

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyCVyeQJe3qfH-i2ejwjZuf-TGki39R23mw",
    authDomain: "carrito-compra-df707.firebaseapp.com",
    projectId: "carrito-compra-df707",
    storageBucket: "carrito-compra-df707.appspot.com",
    messagingSenderId: "634578396989",
    appId: "1:634578396989:web:f353b502a3109d870b8754"
  };

  initializeApp(firebaseConfig);



  return (
    < >

      <CartContext>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/categoria/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailCointainer />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContext>

    </>


  );
}

export default App;