import * as React from 'react';

type FormData = {
	name: string;
	image: string;
	suggestion: string;
	suggestedBy: string;
};

export const CreateNewSuggestion = () => {
	const [formData, setFormData] = React.useState<FormData>({
		name: '',
		image: '',
		suggestion: '',
		suggestedBy: '',
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		// Basic form validation
		if (
			!formData.name ||
			!formData.image ||
			!formData.suggestion ||
			!formData.suggestedBy
		) {
			console.error('Please fill in all fields');
			return;
		}

		console.log('Form Data:', formData);
	};

	return (
		<div className="max-w-lg">
			<form onSubmit={handleSubmit}>
				<div className="flex gap-2">
					<label htmlFor="name">Nome</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className="border border-1 border-black rounded"
						required
					/>
				</div>
				<div className="mt-4" />
				<div className="flex gap-2">
					<label htmlFor="image">Link para a imagem</label>
					<input
						type="text"
						name="image"
						value={formData.image}
						onChange={handleChange}
						className="border border-1 border-black rounded"
						required
					/>
				</div>
				<div className="mt-4" />
				<div className="flex gap-2">
					<label htmlFor="suggestion">Link para a sugestão</label>
					<input
						type="text"
						name="suggestion"
						value={formData.suggestion}
						onChange={handleChange}
						className="border border-1 border-black rounded"
						required
					/>
				</div>
				<div className="mt-4" />
				<div className="flex gap-2">
					<label htmlFor="suggestedBy">Sugestão de: </label>
					<input
						type="text"
						name="suggestedBy"
						value={formData.suggestedBy}
						onChange={handleChange}
						className="border border-1 border-black rounded"
						required
					/>
				</div>
				<div className="mt-4" />
				<button
					type="submit"
					className="bg-cyan-800 px-4 py-2 rounded w-full text-white font-bold"
				>
					Enviar
				</button>
			</form>
		</div>
	);
};
