import { useState } from 'react';

const useForm = (initialState = {}) => {
	const [inputs, setInputs] = useState(initialState);

	const handeleChange = (e) => {
		const { name, value, checked, type } = e.target;

		setInputs((old) => ({
			...old,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const reset = () => {
		setInputs(initialState);
	};

	return [inputs, handeleChange, reset];
};

export { useForm };
