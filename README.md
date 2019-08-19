<p align="center"><img width=""src="https://i.imgur.com/aUyJLqg.png"></p>
<h1 align="center">Babel Preset Env Available Plugins</h1>

[![Build Status](https://travis-ci.org/katalonne/babel-preset-env-available-plugins.svg?branch=master)](https://travis-ci.org/katalonne/babel-preset-env-available-plugins)
[![codebeat badge](https://codebeat.co/badges/299f68a9-8267-4f8d-a3e8-9abc5910f582)](https://codebeat.co/projects/github-com-katalonne-babel-preset-env-available-plugins-master)
[![GitHub open issues](https://img.shields.io/github/issues/katalonne/babel-preset-env-available-plugins.svg)](https://github.com/katalonne/babel-preset-env-available-plugins/issues?q=is%3Aopen+is%3Aissue)
[![npm version](https://img.shields.io/npm/v/babel-preset-env-available-plugins.svg)](https://www.npmjs.com/package/babel-preset-env-available-plugins)
[![MIT License](https://img.shields.io/github/license/katalonne/babel-preset-env-available-plugins.svg)](https://github.com/katalonne/babel-preset-env-available-plugins/blob/master/LICENSE)

Promise based module for getting babel-preset-env available plugins' names.
For browser and node.js

## Installation
```bash
yarn add babel-preset-env-available-plugins

npm install --save babel-preset-env-available-plugins
```
## Usage

```javascript
import getPlugins from 'babel-preset-env-available-plugins';

getPlugins().then(plugins => {
  console.log(plugins)
}).catch(e => {
  console.error(e)
})
```

## License

MIT © [katalonne](https://github.com/katalonne)