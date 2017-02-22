const _ = require('lodash'),
  chalk = require('chalk'),
  glob = require('glob'),
  fs = require('fs'),
  path = require('path')

/**
 * Get files by glob patterns
 */
const getGlobbedPaths = function (globPatterns, excludes) {
  // URL paths regex
  const urlRegex = new RegExp('^(?:[a-z]+:)?//', 'i')

  // The output array
  let output = []

  // If glob pattern is array then we use each pattern in a recursive way, otherwise we use glob
  if (_.isArray(globPatterns)) {
    globPatterns.forEach(function (globPattern) {
      output = _.union(output, getGlobbedPaths(globPattern, excludes))
    })
  } else if (_.isString(globPatterns)) {
    if (urlRegex.test(globPatterns)) {
      output.push(globPatterns)
    } else {
      let files = glob.sync(globPatterns)
      if (excludes) {
        files = files.map(function (file) {
          if (_.isArray(excludes)) {
            for (const i in excludes) {
              if (excludes.hasOwnProperty(i)) {
                file = file.replace(excludes[i], '')
              }
            }
          } else {
            file = file.replace(excludes, '')
          }
          return file
        })
      }
      output = _.union(output, files)
    }
  }

  return output
}

/**
 * Validate NODE_ENV existence
 */
const validateEnvironmentconstiable = function () {
  const environmentFiles = glob.sync('./config/env/' + process.env.NODE_ENV + '.js')
  console.log()
  if (!environmentFiles.length) {
    if (process.env.NODE_ENV) {
      console.error(chalk.red('+ Error: No configuration file found for "' + process.env.NODE_ENV + '" environment using development instead'))
    } else {
      console.error(chalk.red('+ Error: NODE_ENV is not defined! Using default development environment'))
    }
    process.env.NODE_ENV = 'development'
  }
  // Reset console color
  console.log(chalk.white(''))
}

/**
 * Validate Secure=true parameter can actually be turned on
 * because it requires certs and key files to be available
 */
const validateSecureMode = function (config) {
  if (!config.secure || config.secure.ssl !== true) {
    return true
  }

  const privateKey = fs.existsSync(path.resolve(config.secure.privateKey))
  const certificate = fs.existsSync(path.resolve(config.secure.certificate))

  if (!privateKey || !certificate) {
    console.log(chalk.red('+ Error: Certificate file or key file is missing, falling back to non-SSL mode'))
    console.log(chalk.red('  To create them, simply run the following from your shell: sh ./scripts/generate-ssl-certs.sh'))
    console.log()
    config.secure.ssl = false
  }
}

/**
 * Validate Session Secret parameter is not set to default in production
 */
const validateSessionSecret = function (config, testing) {
  if (process.env.NODE_ENV !== 'production') {
    return true
  }

  if (config.sessionSecret === 'MEAN') {
    if (!testing) {
      console.log(chalk.red('+ WARNING: It is strongly recommended that you change sessionSecret config while running in production!'))
      console.log(chalk.red('  Please add `sessionSecret: process.env.SESSION_SECRET || \'super amazing secret\'` to '))
      console.log(chalk.red('  `config/env/production.js` or `config/env/local.js`'))
      console.log()
    }
    return false
  } else {
    return true
  }
}

/**
 * Initialize global configuration files
 */
const initGlobalConfigFiles = function (config, assets) {
  // Appending files
  config.files = {}

  // Setting Globbed model files
  config.files.models = getGlobbedPaths(assets.models)

  // Setting Globbed route files
  config.files.routes = getGlobbedPaths(assets.routes)

  // Setting Globbed config files
  config.files.configs = getGlobbedPaths(assets.config)

  // Setting Globbed socket files
  config.files.sockets = getGlobbedPaths(assets.sockets)

  // Setting Globbed policies files
  config.files.policies = getGlobbedPaths(assets.policies)
}

/**
 * Initialize global configuration
 */
const initGlobalConfig = function () {
  // Validate NODE_ENV existence
  validateEnvironmentconstiable()

  // Get the default assets
  const defaultAssets = require(path.join(process.cwd(), 'config/assets/default'))

  // Get the current assets
  const environmentAssets = require(path.join(process.cwd(), 'config/assets/', process.env.NODE_ENV)) || {}

  // Merge assets
  const assets = _.merge(defaultAssets, environmentAssets)

  // Get the default config
  const defaultConfig = require(path.join(process.cwd(), 'config/env/default'))

  // Get the current config
  const environmentConfig = require(path.join(process.cwd(), 'config/env/', process.env.NODE_ENV)) || {}

  // Merge config files
  let config = _.merge(defaultConfig, environmentConfig)

  // read package.json for MEAN.JS project information
  const pkg = require(path.resolve('./package.json'))
  config.meanjs = pkg

  // Extend the config object with the local-NODE_ENV.js custom/local environment. This will override any settings present in the local configuration.
  config = _.merge(config, (fs.existsSync(path.join(process.cwd(), 'config/env/local-' + process.env.NODE_ENV + '.js')) && require(path.join(process.cwd(), 'config/env/local-' + process.env.NODE_ENV + '.js'))) || {})

  // Initialize global globbed files
  initGlobalConfigFiles(config, assets)

  // Validate Secure SSL mode can be used
  validateSecureMode(config)

  // Validate session secret
  validateSessionSecret(config)

  // Expose configuration utilities
  config.utils = {
    getGlobbedPaths: getGlobbedPaths,
    validateSessionSecret: validateSessionSecret
  }

  return config
}

/**
 * Set configuration object
 */
module.exports = initGlobalConfig()
