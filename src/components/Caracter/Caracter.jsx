import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { ModalCaracteres } from '../../components/ModalCaracteres/ModalCaracteres';
import Modal from 'react-bootstrap/Modal';

export const Caracter = (props) => {
	const { name, species, image, id } = props.character;

	const { setname } = useContext(AppContext);

	const [modalShow, setModalShow] = useState(false);

	const handleClick = (name) => {
		name = name.split(' ')[0];
		setname(name);
	};

	return (
		<>
			<div key={id}>
				<Card
					style={{
						height: '22rem',
						width: '12rem',
						textAlign: 'center',
						boxShadow: '0 0.2rem 0.5rem 0.2rem',
						marginTop: '1rem',
					}}
				>
					<Card.Img
						variant="top"
						src={image}
						className="mt-2 "
						style={{ width: '8rem', margin: 'auto' }}
					/>
					<Card.Body>
						<Card.Text className="fw-bold ">{name}</Card.Text>
						<Card.Text className="">{species}</Card.Text>
						<Button
							className="card-button fs-6 w-auto"
							variant="primary"
							onClick={() => {
								handleClick(name);
							}}
						>
							{`See All ${name.split(' ')[0]}`}
						</Button>
						<Button
							className="card-button mt-2 w-auto"
							variant="primary"
							onClick={() => setModalShow(true)}
						>
							{`See ${name.split(' ')[0]}`}
						</Button>
						<ModalCaracteres
							show={modalShow}
							onHide={() => setModalShow(false)}
							character={props.character}
						/>
					</Card.Body>
				</Card>
			</div>
		</>
	);
};
