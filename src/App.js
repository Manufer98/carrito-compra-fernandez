import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ListItemCointainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Test from "./components/Test";
function App() {
  const [mounted, setMounted] = useState(true)
  const ale = (greeting) => {
    alert(greeting)
  }
  return (

    <div>
      <NavBar />
      {/*  <Props fun={ale} msg={"Saludo desde props"} /> */}
      <ListItemCointainer className="text-center" fun={ale} greeting={"Hola, esto es un saludo pasado por props "} />
      {mounted ? <Test desde={0} /> : "Nada "}
      <br />
      <button onClick={() => {
        setMounted(false)
      }}>Sacar Test</button>
      <br />
      <button onClick={() => {
        setMounted(true)
      }}>Poner Test</button>
    </div>
  );
}

export default App;
