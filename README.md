<p align="center"><img width=""src="https://i.imgur.com/aUyJLqg.png"></p>
<h1 align="center">Babel Preset Env Available Plugins</h1>

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