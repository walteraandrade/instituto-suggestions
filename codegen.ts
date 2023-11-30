import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: {
		'https://instituto-playlist.hasura.app/v1/graphql': {
			headers: {
				'x-hasura-admin-secret': /* paste key from env */ '',
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
