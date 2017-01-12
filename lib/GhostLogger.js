'use strict';

class GhostLogger {

  constructor (logger, enabled) {
    this._logger = logger;
    this._enabled = enabled;
  }

  /**
   * @param {string} msg
   * @param {object} data
   */
  debug (msg, data) {
    if (this._enabled) this._logger.debug({ message: msg, data: data });
  }

  /**
   * @param {string} msg
   * @param {object} data
   */
  info (msg, data) {
    if (this._enabled) this._logger.info({ message: msg, data: data });
  }

  /**
   * @param {string} msg
   * @param {object} data
   */
  warning (msg, data) {
    if (this._enabled) this._logger.warning({ message: msg, data: data });
  }

  /**
   * @param {string} msg
   * @param {object} data
   */
  error (msg, data) {
    if (this._enabled) this._logger.err({ message: msg, data: data });
  }
}

module.exports = GhostLogger;