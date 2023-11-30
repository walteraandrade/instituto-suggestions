import * as React from 'react';
import { Playlist } from '../data/schema/graphql';

export type SuggestionType = Omit<Playlist, '__typename'>;

export const SuggestionsContext = React.createContext<SuggestionType | null>(
	null
);

export function useSuggestionsContext() {
	const context = React.useContext(SuggestionsContext);
	if (!context) {
		throw new Error(
			'SuggestionsContext must be used inside SuggestionsContextProvider'
		);
	}

	return context;
}
