import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: [
		{
			'https://instituto-playlist.hasura.app/v1/graphql': {
				headers: {
					'x-hasura-admin-secret': '',
				},
			},
		},
	],
	documents: 'src/**/*.tsx',
	generates: {
		'src/data/': {
			preset: 'client',
			plugins: [],
		},
	},
};

export default config;
