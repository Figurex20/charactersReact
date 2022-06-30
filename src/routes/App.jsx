import React from 'react';
import { AppContext } from '../context/AppContext.jsx';
import { useInitialState } from '../hooks/useInitialState.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Pages } from '../containers/Pages2/Pages.jsx';
import { Home } from '../pages/Home/Home.jsx';
import { Login } from '../pages/Login/Login.jsx';
import { Products } from '../pages/Products/Products.jsx';
import { Product } from '../pages/Product/Product.jsx';
import { NewProduct } from '../pages/NewProduct/NewProduct.jsx';
import { Orders } from '../pages/Orders/Orders.jsx';
import { NotFound } from '../pages/NotFound/NotFound.jsx';

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
