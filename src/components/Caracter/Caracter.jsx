import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Caracter = ({ character }) => {
	const { name, species, image } = character;
	return (
		<Card className="m-2 " style={{ width: '18rem' }}>
			<Card.Img variant="top" className="mt-2" src={image} />
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>{species}</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
};
