import { Outlet } from 'react-router-dom';
import { Layout } from '../../components/layout/Layout.jsx';
import { useEffect, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
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
