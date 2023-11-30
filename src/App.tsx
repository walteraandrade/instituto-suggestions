import { useQuery, gql } from '@apollo/client';
import { DefaultSpinner } from './components/spinner';
import { SuggestionsQueryQuery } from './data/schema/graphql';
import { SuggestionCard } from './components/suggestion-card';
import { SuggestionTitle } from './components/suggestion-title';
import { SuggestionImage } from './components/suggestion-image';
import { Button } from './components/button';
import { CreateNewSuggestion } from './components/create-new-suggestion';
const query = gql`
	query SuggestionsQuery {
		playlist {
			author
			created_at
			id
			image
			link
			name
			updated_at
		}
	}
`;

function App() {
	const { data, loading } = useQuery<SuggestionsQueryQuery>(query);

	return (
		<div className="bg-gray-100 px-12 py-8 h-screen text-center">
			<h1 className="text-2xl">Instituto's Suggestions</h1>
			<hr />
			<CreateNewSuggestion />
			<div className="mt-8" />
			<hr />
			<div className="mt-8" />
			<div className="flex">
				{loading && <DefaultSpinner />}
				{data?.playlist.map((suggestion) => (
					<SuggestionCard suggestion={suggestion} key={suggestion.id}>
						<SuggestionTitle />
						<SuggestionImage />
						<div className="mt-8" />

						<Button />
					</SuggestionCard>
				))}
			</div>
		</div>
	);
}

export default App;
