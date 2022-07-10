import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';

import Logo from '../../assets/Logo.svg';

export const Footer = () => {
	return (
		<>
			<footer className="laboral bg-dark ">
				<Container className="p-5">
					<Row className="row-block">
						<Col>
							<Link to="/" className="navbar-brand btn bg-transparent vw-50 ms-1">
								<img src={Logo} alt="logo-header" />
							</Link>
						</Col>
						<Col>
							<Row>
								<Link to="/" className=" btn bg-transparent text-light text-start row-block_links">
									About us
								</Link>
								<Link to="/" className=" btn bg-transparent text-light text-start row-block_links">
									Our shops
								</Link>
								<Link to="/" className=" btn bg-transparent text-light text-start row-block_links">
									Privacy Policy
								</Link>
								<Link to="/" className=" btn bg-transparent text-light text-start row-block_links">
									Advertise here
								</Link>
								<Link to="/" className=" btn bg-transparent text-light text-start row-block_links">
									I want to be a franchisee
								</Link>
							</Row>
						</Col>
						<Col>
							<Form className="text-light">
								<Container>
									<Form.Group className="mb-3" controlId="formBasicEmail">
										<Form.Label>Email address</Form.Label>
										<Form.Control type="email" placeholder="Enter email" className="bg-secondary" />
										<Form.Text className="text-muted">
											We'll never share your email with anyone else.
										</Form.Text>
									</Form.Group>

									<Form.Group className="mb-3" controlId="formBasicPassword">
										<Form.Label>Password</Form.Label>
										<Form.Control type="password" placeholder="Password" className="bg-secondary" />
									</Form.Group>

									<Button variant="primary" type="submit">
										Submit
									</Button>
								</Container>
							</Form>
						</Col>
						<Row>
							<Container>
								<h1 className="text-light text-center mt-5">
									Made by Kenneth Alonso Gómez Martínez
								</h1>
							</Container>
						</Row>
					</Row>
				</Container>
			</footer>
		</>
	);
};
