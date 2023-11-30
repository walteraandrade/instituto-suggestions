import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: {
		'https://instituto-playlist.hasura.app/v1/graphql': {
			headers: {
				'x-hasura-admin-secret':
					'vLeMV6qUf5qOe7I2bFtFJT5S6PtGg1T5dG8rIUKB5HSHl4TsS5omCRWUWqpUgaPh',
			},
		},
	},
	documents: 'src/**/*.tsx',
	generates: {
		'src/data/schema/': {
			preset: 'client',
			plugins: [],
		},
	},
};

export default config;
