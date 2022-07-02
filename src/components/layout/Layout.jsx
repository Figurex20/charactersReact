import { NavLink } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import { Search } from '../Search/Search.jsx';

const Layout = () => {
	return (
		<Navbar className="bg-dark fixed-top">
			<Container>
				<Search />
				<NavLink to="/login" className="navbar-brand btn btn-primary col-1">
					Login
				</NavLink>
			</Container>
		</Navbar>
	);
};

export { Layout };
