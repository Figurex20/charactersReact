import { Outlet } from 'react-router-dom';
import { Layout } from '../../components/layout/Layout.jsx';

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
