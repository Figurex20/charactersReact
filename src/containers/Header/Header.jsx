import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="header p-5 text-start">
			<div className="header_content ms-5">
				<h1 className="fs-1">Febrero Promocional</h1>
				<p className="fs-2">Productos selecionados con 33% de descuento</p>
				<Link to="/product" className="btn bg-info text-light">
					Ver Consolas
				</Link>
			</div>
		</div>
	);
};

export { Header };
