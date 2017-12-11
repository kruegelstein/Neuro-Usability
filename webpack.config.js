module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/Neuro-Usability/',
    filename: 'bundle.js'
  },
  devtool: '#eval-source-map',
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: [
          'react',
          'es2015',
          'stage-1'
        ]
      }
    },
    {
      test:/\.css$/,
      loader:'style!css!'
    }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    inline: true,
    port: 8008,
    historyApiFallback: true,
    contentBase: './'
  }
};
