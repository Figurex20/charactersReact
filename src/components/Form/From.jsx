import { useContext, useRef } from 'react';
import { useForm } from '../../hooks/useForm';
import Swal from 'sweetalert2';
import { AppContext } from '../../context/AppContext';

export const From = () => {
	const svgSearch = useRef(null);

	const { setname } = useContext(AppContext);

	const [inputs, handeleChange, reset] = useForm({
		nombre: '',
	});

	const { nombre } = inputs;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!nombre.trim()) {
			return Swal.fire({
				title: 'Error!',
				text: 'Do you want to continue',
				icon: 'error',
				confirmButtonText: 'Cool',
			});
		}
		setname(nombre.trim().toLowerCase());
		reset();
	};

	const onFocus = () => {
		svgSearch.current.setAttribute('class', 'input-icon-primary');
	};
	const onBlur = () => {
		svgSearch.current.setAttribute('class', 'input-icon');
	};

	return (
		<form onSubmit={handleSubmit} className="input-wrapper d-flex input-search">
			<input
				type="text"
				className="input pe-0"
				placeholder="Search for a character"
				onFocus={onFocus}
				onBlur={onBlur}
				value={nombre}
				onChange={handeleChange}
				name="nombre"
			/>
			<button type="submit" className="form-input-icon p-0">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="input-icon "
					viewBox="0 0 20 20"
					fill="currentColor"
					ref={svgSearch}
				>
					<path
						fillRule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clipRule="evenodd"
					/>
				</svg>
			</button>
		</form>
	);
};
