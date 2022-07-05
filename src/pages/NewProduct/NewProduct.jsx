import React from 'react';
import { FormNewProduct } from '../../components/FormNewProduct/FormNewProduct';

const NewProduct = () => {
	return (
		<div className="newProduct">
			<div>
				<h1 className="text-center">Add New Product</h1>
				<FormNewProduct />
			</div>
		</div>
	);
};

export { NewProduct };
