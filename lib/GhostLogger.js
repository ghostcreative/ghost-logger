'use strict';

class GhostLogger {

  constructor (logger) {
    this._logger = logger;
  }

  /**
   * @param {string} msg
   * @param {object} data
   */
  debug (msg, data) {
    this._logger.debug({ message: msg, data: data });
  }

  /**
   * @param {string} msg
   * @param {object} data
   */
  info (msg, data) {
    this._logger.info({ message: msg, data: data });
  }

  /**
   * @param {string} msg
   * @param {object} data
   */
  warning (msg, data) {
    this._logger.warning({ message: msg, data: data });
  }

  /**
   * @param {string} msg
   * @param {object} data
   */
  error (msg, data) {
    this._logger.err({ message: msg, data: data });
  }
}

module.exports = GhostLogger;