### Node

```bash
yarn init
```

```bash
git init
```

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>React Starter</title>
  </head>

  <body>
    <div id="root"></div>
    <noscript> You need to enable JavaScript to run this app. </noscript>
    <script src="../dist/bundle.js"></script>
  </body>
</html>
```

### Babel

```bash
yarn add --dev @babel/core @babel/cli @babel/preset-env @babel/preset-react @babel/preset-typescript
```

```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ]
}
```

[Babel](https://www.notion.so/Babel-af43448aa8a145ec9b95d517ebd7d20a?pvs=21)

### Webpack

```bash
yarn add --dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader
```

```jsx
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"), // Point to the new location
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 8000,
    hot: true,
  },
};
```

[Webpack](https://www.notion.so/Webpack-b2381e97c866463395ce4ade0fa3115d?pvs=21)

[package.json](https://www.notion.so/package-json-57c686bcdfad4c15b1b3744dca335057?pvs=21)

### Typescript

```bash
yarn add --dev typescript @types/react @types/react-dom
```

```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "commonjs",
    "target": "es6",
    "jsx": "react",
    "esModuleInterop": true
  },
  "include": ["./src/**/*"]
}
```

### React

```bash
yarn add react react-dom
```

```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

```jsx
import React, { Component } from "react";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1> Hello, World!!!! </h1>
    </div>
  );
};

export default App;
```

```css
.App {
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
}
```

```json
"scripts": {
  "start": "webpack serve",
  "build": "webpack",
  "typecheck": "tsc"
},
```

### Jest & Enzyme

```bash
yarn add --dev jest enzyme enzyme-adapter-react-16 enzyme-to-json @types/jest @types/enzyme
```

```jsx
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
```

```jsx
module.exports = {
  // other configs
  setupFilesAfterEnv: ["./path_to_your_file/setupEnzyme.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
};
```

```json
"scripts": {
	"test": "jest",
},
```

### Project structure

[Project Structure](https://www.notion.so/Project-Structure-9aaf5dd4cab14cfaaca66c461658d300?pvs=21)
