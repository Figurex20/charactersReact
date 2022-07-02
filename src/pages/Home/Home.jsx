import { useEffect, useContext } from 'react';
import { Header } from '../../containers/Header/Header.jsx';
import { Main } from '../../containers/Main/Main.jsx';
import { useFetch } from '../../hooks/useFetch.jsx';
import { AppContext } from '../../context/AppContext';

const Home = () => {
	const {
		state: { name, characters },
		setcharacters,
	} = useContext(AppContext);

	useEffect(() => {
		useFetch({ name, setcharacters });
	}, [name]);
	return (
		<>
			<Header></Header>
			<Main></Main>
		</>
	);
};

export { Home };
