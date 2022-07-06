import { Outlet } from 'react-router-dom';
import { Layout } from '../../components/layout/Layout.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';
import { Container } from 'react-bootstrap';
const Pages = () => {
	return (
		<>
			<Layout />
			<div>
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export { Pages };
