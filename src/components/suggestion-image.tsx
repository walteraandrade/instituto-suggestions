import { useSuggestionsContext } from '../context/suggestions.context';

export const SuggestionImage = () => {
	const { image } = useSuggestionsContext();

	return <img src={image!} alt="suggestion image" className="h-[150px]" />;
};
