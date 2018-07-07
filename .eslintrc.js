module.exports = {
	env: {
		browser: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/strongly-recommended',
		'plugin:prettier/recommended',
	],
	rules: {
		'vue/html-indent': ['error', 'tab'],
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				trailingComma: 'es5',
				useTabs: true,
			},
		],
	},
};
