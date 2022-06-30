import React from 'react';
import { AppContext } from '../context/AppContext.jsx';
import { useInitialState } from '../hooks/useInitialState.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Pages } from '../containers/Pages.jsx';
import { Home } from '../pages/Home.jsx';
// import { Layout } from '../components/Layout.jsx';
import { Login } from '../pages/Login.jsx';
import { Products } from '../pages/Products.jsx';
import { Product } from '../pages/Product.jsx';
import { NewProduct } from '../pages/NewProduct.jsx';
import { Orders } from '../pages/Orders.jsx';
import { NotFound } from '../pages/NotFound.jsx';

function App() {
	const initialState = useInitialState();

	return (
		<AppContext.Provider value={initialState}>
			<BrowserRouter basename="/">
				{/* <Layout> */}
				<Routes>
					<Route path="/" element={<Pages />}>
						<Route index element={<Home />} />
						<Route path="login" element={<Login />} />
						<Route path="products" element={<Products />} />
						<Route path="product" element={<Product />} />
						<Route path="newproduct" element={<NewProduct />} />
						<Route path="Orders" element={<Orders />} />
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
				{/* </Layout> */}
			</BrowserRouter>
		</AppContext.Provider>
	);
}
export { App };
