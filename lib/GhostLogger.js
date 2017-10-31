'use strict';
const _ = require("lodash");

class GhostLogger {

  /**
   * @param {Winston.Logger} logger - should have levels set to Winston.config.syslog.levels
   */
  constructor(logger, options = {}) {
    this.logger = logger;
    this.options = options;
  }

  /**
   * @param {function} logFn
   * @param {string} msg
   */
  log(logFn, msg) {
    this[logFn](msg);
  }

  /**
   * @param {string} msg
   * @param {object} [data]
   */
  debug(msg, data) {
    _log(this.logger, this.logger.debug, this.options, msg, data);
  }

  /**
   * @param {string} msg
   * @param {object} [data]
   */
  info(msg, data) {
    _log(this.logger, this.logger.info, this.options, msg, data);
  }

  /**
   * @param {string} msg
   * @param {object} [data]
   */
  notice(msg, data) {
    _log(this.logger, this.logger.notice, this.options, msg, data);
  }

  /**
   * @param {string} msg
   * @param {object} [data]
   */
  warning(msg, data) {
    _log(this.logger, this.logger.warning, this.options, msg, data);
  }

  /**
   * @param {string} msg
   * @param {object} [data]
   */
  error(msg, data) {
    if (data && data instanceof Error) {
      data = {
        errorMessage: data.message,
        errorStack: data.stack,
        err: data
      }
    } else if (data && data.err && data.err instanceof Error) {
      data.errorMessage = data.err.message;
      data.errorStack = data.err.stack;
    }

    _log(this.logger, this.logger.error, this.options, msg, data);
  }


  /**
   * @returns {Winston.Logger}
   */
  getLogger() {
    return this.logger;
  }
}

function _log(logger, logFunction, options, msg, data) {
  const boundLogFunction = logFunction.bind(logger);
  if (data) {
    const wrappedData = {data: _.omit(data, _.get(options, "blacklist"))};
    boundLogFunction(msg, wrappedData);
  } else {
    boundLogFunction(msg);
  }
}

module.exports = GhostLogger;