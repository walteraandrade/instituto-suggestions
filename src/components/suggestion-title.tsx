import { useSuggestionsContext } from '../context/suggestions.context';

export const SuggestionTitle = () => {
	const { name } = useSuggestionsContext();
	return <h3 className="font-xl font-bold">{name}</h3>;
};
