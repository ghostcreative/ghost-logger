'use strict';
const _ = require('lodash');
const Logger = require('le_node');
const Winston = require('winston');
require('newrelic-winston');
require('winston-loggly');

const WinstonLoggerClass = Winston.Logger;
const GhostLogger = require('./GhostLogger');

class GhostLoggerFactory {

  /**
   * @name GhostLogger_Options
   * @type {Object}
   * @property {Boolean} enabled
   * @property {GhostLogger_OptionsConsole} console
   * @property {GhostLogger_OptionsLogentries} logentries
   * @property {GhostLogger_OptionsLoggly} loggly
   * @property {GhostLogger_OptionsNewrelic} newrelic
   */

  /**
   * @name GhostLogger_OptionsConsole
   * @type {Object}
   * @property {Boolean} enabled
   * @property {String} token
   * @property {Boolean} console
   */

  /**
   * @name GhostLogger_OptionsLogentries
   * @type {Object}
   * @property {Boolean} enabled
   * @property {String} token
   * @property {Boolean} console
   */

  /**
   * @name GhostLogger_OptionsLoggly
   * @type {Object}
   * @property {Boolean} enabled
   * @property {String} token
   * @property {Boolean} console
   */

  /**
   * @name GhostLogger_OptionsNewrelic
   * @type {Object}
   * @property {Boolean} enabled
   * @property {String} token
   * @property {Boolean} console
   */

  /**
   * @param {GhostLogger_Options} options
   */
  constructor (options) {
    const winstonLogger = Internals.InitWinstonLogger(options);
    return new GhostLogger(winstonLogger);
  }

}

class Internals {

  static InitWinstonLogger (options) {
    // Create a new Winston Logger
    const winstonLogger = new WinstonLoggerClass({});
    winstonLogger.setLevels(Winston.config.syslog.levels);

    if (options.enabled) {
      Internals.InitConsoleTransport(winstonLogger, options.console);
      Internals.InitLogglyTransport(winstonLogger, options.loggly);
      Internals.InitLogentriesTransport(winstonLogger, options.logentries);
      Internals.InitNewrelicTransport(winstonLogger, options.newrelic);
    }
    return winstonLogger;
  }

  /**
   * @param {Winston.Logger} winstonLogger
   * @param {GhostLogger_OptionsConsole} options
   */
  static InitConsoleTransport (winstonLogger, options) {
    if (options.enabled) {
      const loggerConfig = _.defaults(options, {
        level: 'info',
        silent: false,
        colorize: true,
        timestamp: false,
        json: true,
        stringify: false,
        prettyPrint: true,
        depth: 3,
        humanReadableUnhandledException: true,
        showLevel: true
      });
      winstonLogger.add(Winston.transports.Console, loggerConfig);
    }
  }

  /**
   * @param {Winston.Logger} winstonLogger
   * @param {GhostLogger_OptionsLoggly} options
   */
  static InitLogglyTransport (winstonLogger, options) {
    if (options.enabled) {
      const loggerConfig = _.defaults(options, {
        level: 'info',
        json: true,
        stripColors: false
      });
      winstonLogger.add(Winston.transports.Loggly, loggerConfig);
    }
  }

  /**
   * @param {Winston.Logger} winstonLogger
   * @param {GhostLogger_OptionsLogentries} options
   */
  static InitLogentriesTransport (winstonLogger, options) {
    if (options.enabled) {
      const loggerConfig = _.defaults(options, {
        console: false,
        secure: false,
        flatten: false,
        flattenArrays: false,
        timestamp: false,
        withLevel: true,
        withStack: true
      });
      winstonLogger.add(Winston.transports.Loggly, loggerConfig);
    }
  }

  /**
   * @param {Winston.Logger} winstonLogger
   * @param {GhostLogger_OptionsNewrelic} options
   */
  static InitNewrelicTransport (winstonLogger, options) {
    if (options.enabled) {
      // TODO - complete new relic transport
    //   const loggerConfig = _.defaults(options, {
    //     level: 'info'
    //   });
    //   winstonLogger.add(Winston.transports.Loggly, loggerConfig);
    }
  }

}

module.exports = GhostLoggerFactory;