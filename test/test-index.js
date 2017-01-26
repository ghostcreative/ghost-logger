'use strict';

const Chai = require('chai');
const expect = Chai.expect;
const Winston = require('winston');
const WinstonLoggerClass = Winston.Logger;
const Logger = require('../index');

describe('Index.js', function() {
  it('Should be our Logger class', function() {
    // constructor takes winstonLogger
    const winstonLogger = new WinstonLoggerClass({});
    winstonLogger.setLevels(Winston.config.syslog.levels);
    const logger = new Logger(winstonLogger);

    expect(logger.debug).to.be.a('function');
    expect(logger.info).to.be.a('function');
    expect(logger.notice).to.be.a('function');
    expect(logger.warning).to.be.a('function');
    expect(logger.error).to.be.a('function');
  });
});