import { Link } from 'react-router-dom';

import '../styles/css/bootstrap.css';

const Header = () => {
	return (
		<div className="header p-5 text-center">
			<h1>Febrero Promocional</h1>
			<p>Productos selecionados con 33% de descuento</p>
			<Link to="/product" className="btn bg-light">
				Ver Consolas
			</Link>
		</div>
	);
};

export { Header };
