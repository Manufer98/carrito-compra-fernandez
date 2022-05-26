import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Logo from "../logo.png";
import "./NavBar.css";
const NavBar = () => {
	return (
		<div className='App'>
		<Navbar className='ml-auto' bg="dark " variant='dark' sticky='top' 
		expand="lg" collapseOnSelect>
		<Navbar.Brand  >
			<img  className="my-auto mx-3" src={Logo} width="80px"/>
			Carrito de Compra
		</Navbar.Brand >
		<Navbar.Toggle/>
		<Navbar.Collapse className="text-center mx-4">
		<Nav className="ms-auto" >
		<Button  className="mx-5" size="sm" variant="outline-light"  >Inicio</Button>
			<NavDropdown  title="Productos"> 
			<NavDropdown.Item>
			Café</NavDropdown.Item>
			<NavDropdown.Item>
			Té</NavDropdown.Item>
			<NavDropdown.Divider/>
			<NavDropdown.Item>
			Otros</NavDropdown.Item>
			</NavDropdown>
			<Nav.Link> Sobre Nostros</Nav.Link>
			<Nav.Link> Contacto</Nav.Link>
			<Button className="mx-5" size="sm" bg="ligth " variant="outline-light">Login</Button>
		</Nav>
		</Navbar.Collapse>
		</Navbar>
		</div>
	);
};

export default NavBar;
