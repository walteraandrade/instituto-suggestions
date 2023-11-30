import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const graphqlUrl = import.meta.env.VITE_GRAPHQL_ENDPOINT;
const hasuraKey = import.meta.env.HASURA_ADMIN_SECRET;
const client = new ApolloClient({
	uri: graphqlUrl,
	cache: new InMemoryCache(),
	headers: {
		'x-hasura-admin-secret': hasuraKey,
	},
});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>
);
