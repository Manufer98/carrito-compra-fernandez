import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { MiContexto } from '../../context/CartContext';
import './Cart.css';
import EmptyCart from './EmptyCart';
const Cart = () => {
	let navigate = useNavigate();
	const { getTotalPriceItems, qtyMinus, qtyPlus, getTotalPrice, deleteItem, emptyCarrito, cart } = useContext(MiContexto);

	return (
		<section className="cart" style={{ backgroundColor: '#808d8e', minHeight: '100vh' }}>
			{cart.length > 0 ? (
				<>
					{cart.map((item, index) => (
						<div key={index}>
							<div className="container h-100">
								<div className="row d-flex justify-content-center align-items-center h-100">
									<div className="col">
										<div style={{ backgroundColor: '#3F4E4F' }} className="card ">
											<div className="card-body p-4 hol">
												<div className="row align-items-center">
													<div className="col-md-2">
														<img
															style={{ borderRadius: '15px', cursor: 'pointer' }}
															onClick={() => {
																const url = '/item/' + item.id;
																navigate(url);
															}}
															src={item.pictureUrl}
															className="img-fluid"
															alt="Generic placeholder image"
														/>
													</div>
													<div className="col-md-2 d-flex justify-content-center">
														<div>
															<p className="small mb-4 pb-2">Producto</p>
															<p className="lead fw-normal mb-0">
																{item.quantity} x {item.title}
															</p>
														</div>
													</div>
													<div className="col-md-2 d-flex justify-content-center">
														<div>
															<p className="small  mb-4 pb-2">Precio unitario</p>
															<p className="lead fw-normal mb-0">
																<i className="fas fa-circle me-2" style={{ color: '#fdd8d2' }}></i>${item.price}
															</p>
														</div>
													</div>
													<div className="col-md-2 d-flex justify-content-center">
														<div>
															<p className="small  mb-4 pb-2">Precio Total</p>
															<p className="lead fw-normal mb-0"> ${getTotalPrice(item)}</p>
														</div>
													</div>

													<div className="col-md-2 d-flex justify-content-center">
														<div>
															<div className="coun">
																<Button onClick={() => qtyMinus(item)}>-</Button>
																<div style={{ color: '#fdd8d2' }} className="countt">
																	{item.quantity}
																</div>
																<Button onClick={() => qtyPlus(item)}>+</Button>
															</div>
														</div>
													</div>
													<div className="col-md-2 d-flex justify-content-center">
														<div>
															<Button style={{ marginTop: '50px' }} onClick={() => deleteItem(item.id)}>
																Eliminar
															</Button>
														</div>
													</div>
													<p className="small mx-5 ">Stock {item.stock}</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
					<div className="card mb-5" style={{ backgroundColor: '#DCD7C9' }}>
						<div className="card-body p-4">
							<div className="float-end">
								<p className="mb-0 me-5 d-flex align-items-center">
									<span className="small text-muted me-2">Importe Total:</span> <span className="lead fw-normal">{getTotalPriceItems()}</span>
								</p>
							</div>
						</div>
					</div>

					<div className="d-flex justify-content-end">
						<Button onClick={() => navigate('/checkout')}>Finalizar Compra</Button>
						<Button onClick={emptyCarrito} style={{ backgroundColor: '#DCD7C9', color: '#2C3639' }} className="btn btn-light  me-2">
							Vaciar Carrito
						</Button>
					</div>
				</>
			) : (
				<EmptyCart />
			)}
		</section>
	);
};

export default Cart;
