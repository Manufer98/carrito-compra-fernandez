import "bootstrap/dist/css/bootstrap.min.css";
import ListItemCointainer from "./components/Items/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
function App() {
  const ale = (greeting) => {
    alert(greeting)
  }
  return (

    <div>
      <NavBar />
      <ListItemCointainer />

    </div>
  );
}

export default App;
