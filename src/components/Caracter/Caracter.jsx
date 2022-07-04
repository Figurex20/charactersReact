import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export const Caracter = (props) => {
	const { name, species, image, id } = props.character;

	const { setname } = useContext(AppContext);

	const handleClick = (name) => {
		name = name.split(' ')[0];
		setname(name);
	};

	return (
		<>
			<div key={id}>
				<Card>
					<Card.Img
						variant="top"
						src={image}
						className="mt-2 "
						style={{ width: '12rem', margin: 'auto' }}
					/>
					<Card.Body>
						<Card.Title>{name}</Card.Title>
						<Card.Text>{species}</Card.Text>
						<Button
							variant="primary"
							onClick={() => {
								handleClick(name);
							}}
						>
							{`See All ${name.split(' ')[0]}`}
						</Button>
					</Card.Body>
				</Card>
			</div>
		</>
	);
};
