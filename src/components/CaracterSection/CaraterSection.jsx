import React from 'react';
import { Caracter } from '../../components/Caracter/Caracter';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';

export const CaraterSection = (props) => {
	const { name, characterList } = props;

	return (
		<>
			<div
				className="text-center fs-2 my-2 rounded-3 m-2 grupo-caracter"
				style={{ boxShadow: '0 0rem 0.2rem 0.3rem' }}
			>
				{name}
			</div>
			<Container>
				<Row>
					{characterList.map((character) => {
						return (
							<Col>
								<Caracter key={character.id} character={character} />
							</Col>
						);
					})}
				</Row>
			</Container>
		</>
	);
};
