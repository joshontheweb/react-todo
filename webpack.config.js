var jsLoader = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loaders: [
    // "react-hot",
    "babel-loader?{'presets': ['react', 'es2015']}"
  ],
  // include: path.join(__dirname, 'src')
};

module.exports = {
	entry: './index.jsx',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
	module: {
		loaders: [
      jsLoader
		]
	}
}
