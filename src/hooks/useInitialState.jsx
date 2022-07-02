import { useState } from 'react';

const initialState = {
	characters: [],
	name: '',
};

function useInitialState() {
	const [state, setState] = useState(initialState);

	const setcharacters = (payload) => {
		setState({
			...state,
			characters: payload,
		});
	};

	const setname = (payload) => {
		setState({
			...state,
			name: payload,
		});
	};

	const removeFromWord = (id) => {
		setState({
			...state,
			words: state.words.filter((item) => item.id !== id),
			wordSave: '',
		});
	};

	return {
		state,
		setcharacters,
		setname,
		removeFromWord,
	};
}

export { useInitialState };
