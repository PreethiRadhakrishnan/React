module.exports = {
  entry: './common-ui/app.jsx',
  output: {
    filename: 'common-ui/bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015','react']
      }
    }]
  },
  resolve: {
    extensions: ['','.js','.jsx']
  }
}
