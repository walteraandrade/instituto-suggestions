import { useSuggestionsContext } from '../context/suggestions.context';

export const Button = () => {
	const { link } = useSuggestionsContext();
	return (
		<a
			href={link!}
			target="_blank"
			className="bg-gray-400 text-white text-bold text-center rounded"
		>
			Veja
		</a>
	);
};
