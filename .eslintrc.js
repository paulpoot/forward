module.exports = {
	parser: '@typescript-eslint/parser', // Specifies the ESLint parser
	extends: [
		'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
		'prettier',
		'plugin:react/recommended',
		'plugin:react-perf/recommended',
		'plugin:react-hooks/recommended',
	],
	parserOptions: {
		ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
		ecmaFeatures: {
			jsx: true, // Allows for the parsing of JSX
		},
	},
	rules: {
		'no-console': 1,
		'@typescript-eslint/no-non-null-assertion': 2,
		'@typescript-eslint/explicit-function-return-type': 2,
		'@typescript-eslint/no-explicit-any': 2,
		'no-duplicate-imports': 2,
	},
	overrides: [
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
				'@typescript-eslint/explicit-function-return-type': 'off',
				'@typescript-eslint/camelcase': 'off',
				'no-console': 'off',
			},
		},
	],
	settings: {
		react: {
			version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
		},
	},
};