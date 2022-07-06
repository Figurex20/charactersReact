import { useContext } from 'react';
import { CaraterSection } from '../../components/CaracterSection/CaraterSection';
import { AppContext } from '../../context/AppContext';
import Row from 'react-bootstrap/esm/Row';
// import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';

const Main = () => {
	const {
		state: { characters, name },
	} = useContext(AppContext);

	const devisor = ['First group', 'Second group', 'Third group', 'Fourth group'];
	if (name.length === 0) {
		return (
			<>
				{devisor.map((section, index) => {
					const selection = [0, 5, 10, 15, 20];
					const characterList = characters.slice(selection[index], selection[index + 1]);
					return (
						<Container className="pb-3">
							<Row>
								<CaraterSection key={index} name={section} characterList={characterList} />
							</Row>
						</Container>
					);
				})}
			</>
		);
	} else {
		return (
			<>
				<CaraterSection name={name} characterList={characters} />
			</>
		);
	}
};

export { Main };
