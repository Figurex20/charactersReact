import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div>
			<h1>NotFound</h1>
			<Link to="/" className="btn btn-outline-primary">
				Home
			</Link>
		</div>
	);
};

export { NotFound };
