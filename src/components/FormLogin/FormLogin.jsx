import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const FormLogin = () => {
	return (
		<Form className="fs-2">
			<Form.Group className="mb-3 login-items" controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="Enter email" className="login-items-control" />
				<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password" className="login-items-control" />
			</Form.Group>

			<Button variant="primary fs-5" type="submit">
				Submit
			</Button>
		</Form>
	);
};
