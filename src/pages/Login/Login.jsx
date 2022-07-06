import { FormLogin } from '../../components/FormLogin/FormLogin';
import { Container, Row } from 'react-bootstrap';

function Login() {
	return (
		<div className=" login">
			<div style={{ padding: '2rem', boxShadow: '0 .5rem 1rem' }}>
				<h1 className="text-center">Log in</h1>
				<FormLogin />
			</div>
		</div>
	);
}

export { Login };
