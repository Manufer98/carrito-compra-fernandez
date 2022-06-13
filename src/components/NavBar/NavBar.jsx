import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from "../../logo.png";
import CartWidget from '../Items/CartWidget';
import "./NavBar.css";
const NavBar = () => {
	return (
		<div className='App'>
		<Navbar className='ml-auto' bg="dark " variant='dark' sticky='top' 
		expand="lg" collapseOnSelect>
			
		<Navbar.Brand  >
			<Link to="/">
			<img  className="my-auto mx-3" src={Logo} width="80px" alt='logo react'/>
			</Link>
			Carrito de Compra
			
		</Navbar.Brand >
	
		<Navbar.Toggle/>
		<Navbar.Collapse className="text-center  mx-4">
		<Nav className=" ms-auto" >
		<Link to="/"><Button  className="" size="sm" variant="outline-light"  >Inicio</Button></Link>
			<NavDropdown  title="Productos"> 
			<NavDropdown.Item>
			Café</NavDropdown.Item>
			<NavDropdown.Item>
			Té</NavDropdown.Item>
			<NavDropdown.Divider/>
			<NavDropdown.Item>
			Otros</NavDropdown.Item>
			</NavDropdown>
			
			<Nav.Link variant="light"> Sobre Nostros</Nav.Link>
			<Nav.Link> Contacto</Nav.Link>
			<Link to="/"><Button className="mb-2 mx-2" size="sm" bg="ligth " variant="outline-light">Login</Button></Link>
			<Link to="/"><CartWidget className="cart"  num={0} /></Link>
		</Nav>
		</Navbar.Collapse>
		</Navbar>
		</div>
	);
};

export default NavBar;
