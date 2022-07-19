import { useEffect, useState } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getProductos } from '../../firebase/FBProductos';
import Logo from '../../logo.png';
import CartWidget from '../Items/CartWidget';
import './NavBar.css';
const NavBar = () => {
	const [category, setCategory] = useState([]);

	useEffect(() => {
		getCategories();
	}, []);

	const getCategories = async () => {
		try {
			const productos = await getProductos();
			//Filtro los elementos unicos de categoria para que no se repitan en el navbar
			setCategory([...new Set(productos.map((i) => i.category))]);
		} catch (e) {}
	};

	return (
		<div className="App">
			<Navbar className="ml-auto" bg="dark " variant="dark" sticky="top" expand="lg" collapseOnSelect>
				<Navbar.Brand>
					<Link to="/">
						<img className="my-auto mx-3" src={Logo} width="80px" alt="logo react" />
					</Link>
					Carrito de Compra
				</Navbar.Brand>

				<Navbar.Toggle />
				<Navbar.Collapse className="text-center mx-4" id="topFixedNavbar1">
					<Nav className="mx-auto ms-auto">
						<Link to="/">
							<Button className="mx-2" variant="outline-light">
								Inicio
							</Button>
						</Link>

						{category.map((i, index) => (
							<Link key={index} to={'/categoria/' + i}>
								<Button variant="dark">{i}</Button>
							</Link>
						))}

						<Nav.Link variant="light"> Sobre Nostros</Nav.Link>
						<Nav.Link> Contacto</Nav.Link>
						<div className="login">
							<Link to="/">
								<Button bg="ligth " variant="outline-light">
									Login
								</Button>
							</Link>
						</div>
						<div className="cart">
							<Link to="/cart">
								<CartWidget />
							</Link>
						</div>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default NavBar;
