import { Outlet } from 'react-router-dom';
import { Layout } from '../../components/layout/Layout.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';
import { Container } from 'react-bootstrap';
const Pages = () => {
	return (
		<>
			<Layout />
			<div style={{ background: '#4f5659' }}>
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export { Pages };
