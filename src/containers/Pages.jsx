import { Outlet } from 'react-router-dom';
import { Layout } from '../components/Layout.jsx';

const Pages = () => {
	return (
		<>
			<Layout />
			<div>
				<Outlet />
			</div>
		</>
	);
};

export { Pages };
