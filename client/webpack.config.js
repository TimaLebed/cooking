const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["@babel/polyfill", "./src/index.jsx"],
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 3000,
    compress: true,
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join("src", "index.html")
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' },
        { from: 'src/pages/Home/copmonents/PopularRecipes/dataCards.json', to: '' },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader'],
      },
      // {
      //   test: /images\/.*\.(png|jpg|svg|gif)$/,
      //   loader: 'url-loader?limit=10000&name="[name]-[hash].[ext]"',
      // },
      // {
      //   test: /fonts\/.*\.(woff|woff2|eot|ttf|svg)$/,
      //   loader: 'file-loader?name="[name]-[hash].[ext]"',
      // },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", '@babel/preset-env']
          }
        }
      },
      // {
      //   test: /\.(png|jpe?g|gif)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 10000,
      //         name: 'assets/[name].[ext]',
      //       },
      //     },
      //   ],
      // },
    ],
  }
}
