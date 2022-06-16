import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import ItemDetailCointainer from "./components/Items/ItemDetailContainer";
import ItemListContainer from "./components/Items/ItemListContainer";
import Navbar from "./components/NavBar/NavBar";
import CartContext from "./context/CartContext";
import Cart from "./components/Items/Cart"

function App() {



  return (
    < >

      <CartContext>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Navigate to="/" />} />
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