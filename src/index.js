const request = require('then-request');

const isBrowser = typeof window != 'undefined'

/**
 * @return {Promise}
 */
const getPlugins = () => {
  return new Promise( (resolve, reject) => {
    const availablePluginsFileUrl = 'https://raw.githubusercontent.com/babel/babel/master/packages/babel-preset-env/src/available-plugins.js';
    request('GET',availablePluginsFileUrl).done((res) => {
      const statusOK = String(res.statusCode)[0] === '2'
      if (statusOK) {
        const jsonValuesRE = /[^:]+(?=,)/gi
        const body = isBrowser ? res.getBody() : res.getBody().toString();
        const values = body.match(jsonValuesRE)
        if (values) {
          const pluginNameRe = /"([^"]*)"/gi
          const pluginNames = values.map(v => {
            return v.match(pluginNameRe)[0].slice(1,-1)
          })
          return resolve(pluginNames)
        } else {
          return reject(`No Values found`)
        }
      } else {
        return reject(`Server responded with status: ${res.status}`)
      }
    })
  })
}

module.exports = getPlugins;

// Allow use of default import syntax in TypeScript
module.exports.default = getPlugins;