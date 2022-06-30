import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
const Search = () => {
	const svgSearch = useRef(null);
	const onFocus = () => {
		svgSearch.current.setAttribute('class', 'input-icon-primary');
	};
	const onBlur = () => {
		svgSearch.current.setAttribute('class', 'input-icon');
	};

	return (
		<div className="d-flex col-10">
			<NavLink to="/" className="navbar-brand btn bg-transparent vw-50 ms-1">
				<img src={Logo} alt="logo-header" />
			</NavLink>
			<div className="input-wrapper">
				<input
					type="text"
					className="input"
					placeholder="Search"
					onFocus={onFocus}
					onBlur={onBlur}
				/>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="input-icon "
					viewBox="0 0 20 20"
					fill="currentColor"
					ref={svgSearch}
				>
					<path
						fillRule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clipRule="evenodd"
					/>
				</svg>
			</div>
		</div>
	);
};

export { Search };
