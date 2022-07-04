import React from 'react';
import { Caracter } from '../../components/Caracter/Caracter';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';

export const CaraterSection = (props) => {
	const { name, characterList } = props;

	return (
		<>
			<div className="text-center fs-2 my-2 bg-info ">{name}</div>
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
