const path = require('path');
const glob = require('glob');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (argv) => ({
	entry: {
		js: glob.sync('./src/**/*.js'),
	},
	mode: argv.mode === 'production' ? 'production' : 'development',
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: `index.js`,
	},
});
