var Scraper = require('./lib/scraper.js');

module.exports.qfScrape = function (options, callback) {
  return new Scraper(options).qfScrape(callback);
};
