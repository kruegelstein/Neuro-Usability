var path = require('path');
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, '/Neuro-Usability'),
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
