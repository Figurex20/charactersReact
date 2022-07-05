import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const FormNewProduct = () => {
	return (
		<Form className="fs-2 text-light">
			<Form.Group className="mb-3 newProduct-items" controlId="formBasicEmail">
				<Form.Label>URL img</Form.Label>
				<Form.Control type="text" placeholder="URL img" className="newProduct-items-control" />
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Category</Form.Label>
				<Form.Control type="text" placeholder="Category" className="newProduct-items-control" />
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Product name</Form.Label>
				<Form.Control type="text" placeholder="Category" className="newProduct-items-control" />
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Price</Form.Label>
				<Form.Control type="text" placeholder="Product name" className="newProduct-items-control" />
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>description</Form.Label>
				<Form.Control type="text" placeholder="description" className="newProduct-items-control" />
			</Form.Group>

			<Button variant="primary fs-5" type="submit">
				Submit
			</Button>
		</Form>
	);
};
