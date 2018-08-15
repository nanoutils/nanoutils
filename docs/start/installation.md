# Installation

## Install library

```bash
npm install nanoutils
```

## Use with ES modules

To use ES modules we wrote a plugin [`babel-plugin-nanoutils`](https://github.com/nanoutils/babel-plugin-nanoutils).

## Install plugin

```bash
npm install babel-plugin-nanoutils
```

## Usage

### Via `.babelrc`:
```json
{
  "plugins": ["nanoutils"]
}
```

### Via CLI
```bash
babel --plugins nanoutils script.js
```

### Via Node API
```js
require("babel-core").transform("code", {
  plugins: ["nanoutils"]
})
```
