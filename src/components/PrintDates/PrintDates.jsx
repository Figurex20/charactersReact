import { useContext, useEffect } from 'react';
import { Caracter } from '../Caracter/Caracter';
import { AppContext } from '../../context/AppContext';
export const PrintDates = () => {
	const {
		state: { characters },
	} = useContext(AppContext);

	return (
		<div className="container">
			<div className="row ">
				{characters.map((item) => (
					<Caracter key={item.id} character={item} />
				))}
			</div>
		</div>
	);
};
