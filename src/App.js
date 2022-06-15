import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import ItemDetailCointainer from "./components/Items/ItemDetailContainer";
import ItemListContainer from "./components/Items/ItemListContainer";
import Navbar from "./components/NavBar/NavBar";
function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/categoria/*" element={<Navigate to="/" />} />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailCointainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>


  );
}

export default App;
