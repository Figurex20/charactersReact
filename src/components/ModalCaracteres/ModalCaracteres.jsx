import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';

export const ModalCaracteres = (props) => {
	const { name, species, image, gender, origin, location, status, episode, created } =
		props.character;

	return (
		<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">{name}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Row>
					<Col>
						<img src={image} alt="" />
					</Col>
					<Col className="mt-3">
						<h4>Gender: {gender}</h4>
						<h4>Origin: {origin.name}</h4>
						<h4>Species: {species}</h4>
						<h4>Location: {location.name}</h4>
						<h4>Status: {status}</h4>
						<h4>Total episodes: {episode.length}</h4>
						<h4>Created: {created.slice(0, 10)}</h4>
					</Col>
				</Row>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};
