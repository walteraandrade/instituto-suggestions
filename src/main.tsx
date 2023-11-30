import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
	uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
	cache: new InMemoryCache(),
	headers: {
		'x-hasura-admin-secret':
			'vLeMV6qUf5qOe7I2bFtFJT5S6PtGg1T5dG8rIUKB5HSHl4TsS5omCRWUWqpUgaPh',
	},
});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>
);
