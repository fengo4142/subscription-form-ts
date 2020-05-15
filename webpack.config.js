const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/src/app.ts'),
    module: {
        rules: [
          {
              test: /\.tsx?$/,
              loader: 'ts-loader',
              exclude: /node_modules/,
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
          {
            test: /\.scss$/i,            
            use: [ 'style-loader', 'css-loader', 'sass-loader' ],
            include: [
              path.resolve('./scss/style.scss')
            ],
          },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
};