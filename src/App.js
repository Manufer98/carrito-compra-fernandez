import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/Items/ItemListContainer";
import Navbar from "./components/NavBar/NavBar";
import Home from "./components/Pruebas/Home";
import TestProducto from "./components/Pruebas/TestProducto";
function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/producto/:id" element={<TestProducto />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
