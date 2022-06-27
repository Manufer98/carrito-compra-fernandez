
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import "./Footer.css";
const Footer = () => {

	return (
		<div className="c">
		<div  className="footer-content">
			<h3>Carrito de Compra</h3>
		
			<h6>Coder House</h6>
			<ul className="socials">
				<li><a href="https://www.linkedin.com/in/manuel-fern%C3%A1ndez-delfino-435bb918b/" target="_blank" rel="noreferrer"> <BsLinkedin className="fa fa-linkedin-square"></BsLinkedin>  </a></li>
				<li><a href="https://github.com/Manufer98" target="_blank" rel="noreferrer" > <BsGithub className="fa fa-github"></BsGithub>  </a></li>
				
			</ul>
			
			<div className="footer-bottom" >
				<p>copyright &copy;2022 designed by    <span ><a className="ww" href="https://www.linkedin.com/in/manuel-fern%C3%A1ndez-delfino-435bb918b/" target="_blank"  rel="noreferrer">Manuel Fernández</a></span> </p>

			</div>
			
		</div>


		</div>
	
	
	)

}

export default Footer;