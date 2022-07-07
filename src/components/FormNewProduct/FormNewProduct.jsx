import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const FormNewProduct = () => {
	return (
		<Form className="fs-2 ">
			<Form.Group className="mb-3 newProduct-items" controlId="formBasicEmail">
				<Form.Label>URL img</Form.Label>
				<Form.Control type="text" placeholder="URL img" className="newProduct-items-control" />
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Gender</Form.Label>
				<Form.Control type="text" placeholder="Gender" className="newProduct-items-control" />
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Origin</Form.Label>
				<Form.Control type="text" placeholder="Origin" className="newProduct-items-control" />
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Species</Form.Label>
				<Form.Control type="text" placeholder="Species" className="newProduct-items-control" />
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Status</Form.Label>
				<Form.Control type="text" placeholder="Status" className="newProduct-items-control" />
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Total episodes</Form.Label>
				<Form.Control
					type="text"
					placeholder="Total episodes"
					className="newProduct-items-control"
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Created</Form.Label>
				<Form.Control type="text" placeholder="Created" className="newProduct-items-control" />
			</Form.Group>

			<Button variant="primary fs-5" type="submit">
				Submit
			</Button>
		</Form>
	);
};
