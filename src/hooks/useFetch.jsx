import Swal from 'sweetalert2';

const useFetch = async ({ name, setcharacters }) => {
	try {
		const response = await fetch(
			`https://rickandmortyapi.com/api/character/?name=${name}&status=alive`
		);

		if (!response.ok) {
			return Swal.fire({
				title: 'Error!',
				text: 'Caracter do not exist',
				icon: 'error',
				confirmButtonText: 'Cool',
			});
		}

		const data = await response.json();
		setcharacters(data.results);
	} catch (error) {
		console.log(error);
	} finally {
	}
};

export { useFetch };
