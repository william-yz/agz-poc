'use strict'

/**
 * Module dependencies.
 */
const config = require('../config'),
  express = require('express'),
  morgan = require('morgan'),
  logger = require('./logger'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  MongoStore = require('connect-mongo')(session),
  compress = require('compression'),
  methodOverride = require('method-override'),
  cookieParser = require('cookie-parser'),
  helmet = require('helmet'),
  flash = require('connect-flash'),
  path = require('path'),
  _ = require('lodash'),
  lusca = require('lusca'),
  restify = require('express-restify-mongoose')

/**
 * Initialize local variables
 */
module.exports.initLocalVariables = function (app) {
  // Passing the request url to environment locals
  app.use(function (req, res, next) {
    res.locals.host = req.protocol + '://' + req.hostname
    res.locals.url = req.protocol + '://' + req.headers.host + req.originalUrl
    next()
  })
}

/**
 * Initialize application middleware
 */
module.exports.initMiddleware = function (app) {
  // Showing stack errors
  app.set('showStackError', true)

  // Enable jsonp
  app.enable('jsonp callback')

  // Should be placed before express.static
  app.use(compress({
    filter: function (req, res) {
      return (/json|text|javascript|css|font|svg/).test(res.getHeader('Content-Type'))
    },
    level: 9
  }))

  // Enable logger (morgan) if enabled in the configuration file
  if (_.has(config, 'log.format')) {
    app.use(morgan(logger.getLogFormat(), logger.getMorganOptions()))
  }

  // Request body parsing middleware should be above methodOverride
  app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(bodyParser.json())
  app.use(methodOverride())

  // Add the cookie parser and flash middleware
  app.use(cookieParser())
  app.use(flash())
}

/**
 * Configure Express session
 */
module.exports.initSession = function (app, db) {
  // Express MongoDB session storage
  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret,
    cookie: {
      maxAge: config.sessionCookie.maxAge,
      httpOnly: config.sessionCookie.httpOnly,
      secure: config.sessionCookie.secure && config.secure.ssl
    },
    key: config.sessionKey,
    store: new MongoStore({
      mongooseConnection: db.connection,
      collection: config.sessionCollection
    })
  }))

  // Add Lusca CSRF Middleware
  app.use(lusca(config.csrf.csp))
}

/**
 * Invoke modules server configuration
 */
module.exports.initModulesConfiguration = function (app, db) {
  config.files.configs.forEach(function (configPath) {
    require(path.resolve(configPath))(app, db)
  })
}

/**
 * Configure Helmet headers configuration
 */
module.exports.initHelmetHeaders = function (app) {
  // Use helmet to secure Express headers
  var SIX_MONTHS = 15778476000
  app.use(helmet.frameguard())
  app.use(helmet.xssFilter())
  app.use(helmet.noSniff())
  app.use(helmet.ieNoOpen())
  app.use(helmet.hsts({
    maxAge: SIX_MONTHS,
    includeSubdomains: true,
    force: true
  }))
  app.disable('x-powered-by')
}

/**
 * Configure the modules ACL policies
 */
module.exports.initModulesServerPolicies = function (app) {
  // Globbing policy files
  config.files.policies.forEach(function (policyPath) {
    require(path.resolve(policyPath)).invokeRolesPolicies()
  })
}

/**
 * Configure the modules server routes
 */
module.exports.initModulesServerRoutes = function (app) {
  // Globbing routing files
  config.files.routes.forEach(function (routePath) {
    require(path.resolve(routePath))(app)
  })
}

module.exports.initRestifyMongoose = function (app) {
  var router = express.Router()
  var mongoose = require('mongoose')
  restify.serve(router, mongoose.model('Users'))
  app.use(router)
}

/**
 * Configure error handling
 */
module.exports.initErrorRoutes = function (app) {
  app.use(function (err, req, res, next) {
    // If the error object doesn't exists
    if (!err) {
      return next()
    }

    // Log it
    console.error(err.stack)

    next()
  })
}

module.exports.handleCORS = function (app) {
  app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,PATCH,OPTIONS')
    res.header('X-Powered-By', ' 3.2.1')
    if (req.method === 'OPTIONS') {
      res.send(200)
    } else {
      next()
    }
  })
}
/**
 * Initialize the Express application
 */
module.exports.init = function (db) {
  // Initialize express app
  var app = express()

  this.handleCORS(app)

  // Initialize local variables
  this.initLocalVariables(app)

  // Initialize Express middleware
  this.initMiddleware(app)

  // Initialize Helmet security headers
  this.initHelmetHeaders(app)

  // Initialize Express session
  this.initSession(app, db)

  // Initialize Modules configuration
  this.initModulesConfiguration(app)

  // Initialize modules server authorization policies
  this.initModulesServerPolicies(app)

  this.initRestifyMongoose(app)

  // Initialize modules server routes
  this.initModulesServerRoutes(app)

  // Initialize error routes
  this.initErrorRoutes(app)

  return app
}
