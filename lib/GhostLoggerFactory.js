'use strict';

const Logger = require('le_node');
const GhostLogger = require('./GhostLogger');

class GhostLoggerFactory {

  /**
   * @name GhostLogger_Options
   * @type {Object}
   * @property {GhostLogger_OptionsLogentries} logentries
   */

  /**
   * @name GhostLogger_OptionsLogentries
   * @type {Object}
   * @property {Boolean} enabled
   * @property {String} token
   * @property {Boolean} consoleLoggingEnabled
   */

  /**
   * @param {GhostLogger_Options} options
   */
  constructor (options) {
    let logger;
    if (options.logentries) logger = new Logger(options.logentries);
    else throw new Error(`GhostLoggerError: GhostLoggerFactory.create - Currently only logentries logging is supported.`);

    return new GhostLogger(logger);
  }

}

module.exports = GhostLoggerFactory;