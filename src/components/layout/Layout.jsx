import { NavLink } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import { Search } from '../Search/Search.jsx';

const Layout = () => {
	return (
		<Navbar className="bg-dark fixed-top container-navbar ">
			<Container className="cotainer-search-link">
				<Search />
				<NavLink to="/login" className="navbar-brand btn btn-primary col-1 input-layout">
					Login
				</NavLink>
			</Container>
		</Navbar>
	);
};

export { Layout };
