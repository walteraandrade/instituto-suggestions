import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: {
		'' /* paste url from env */: {
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
