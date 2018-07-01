const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = (storybookBaseConfig, configType, defaultConfig) => {
	const sassResources = {
		loader: 'sass-resources-loader',
		options: {
			resources: [path.resolve(__dirname, 'styles/hooklift.scss')],
		},
	};

	defaultConfig.module.rules.push({
		test: /\.scss$/,
		use: [
			'vue-style-loader',
			'css-loader',
			{
				loader: 'sass-loader',
			},
			sassResources,
		],
	});

	// // Prevent webpack RuleSet error:
	// // options/query provided without loader (use loader + options)
	// defaultConfig.module.rules = defaultConfig.module.rules.filter(
	// 	r => !(r.optinos || r.query)
	// );

	// plugin for vue-loader v15
	defaultConfig.plugins.push(new VueLoaderPlugin());

	return defaultConfig;
};
