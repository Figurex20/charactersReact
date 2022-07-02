import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import { AppContext } from '../../context/AppContext';
import { From } from '../Form/From';

const Search = () => {
	const { setname } = useContext(AppContext);
	const handleClick = () => {
		setname('');
	};
	return (
		<div className="d-flex col-10">
			<Link to="/" onClick={handleClick} className="navbar-brand btn bg-transparent vw-50 ms-1">
				<img src={Logo} alt="logo-header" />
			</Link>
			<From />
		</div>
	);
};

export { Search };
