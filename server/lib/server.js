'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _graphql = require('graphql');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _schema = require('./data/schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GRAPHQL_PORT = parseInt(process.env.GRAPHQL_PORT, 10) || 3000;

var app = (0, _express2.default)();

app.use('/graphql', (0, _expressGraphql2.default)({
  schema: _schema2.default,
  rootValue: global,
  graphiql: true
}));

app.listen(4000, function () {
  return console.log('Now listening on localhost:4000/graphql');
});

app.get('/scrape', function (req, res) {
  url = "https://www.amazon.ca/Three-Simple-Steps-Success-Business/dp/1936661713/ref=sr_1_1?ie=UTF8&qid=1507562266&sr=8-1&keywords=Three+Simple+Steps";

  (0, _request2.default)(url, function (error, response, html) {
    // Define our data attributes
    var title, price, author, narrator, length;
    var json = { title: "", price: "" };

    if (!error) {
      // Initialize Cheerio library
      var $ = _cheerio2.default.load(html);

      $('#productTitle').filter(function () {
        var data = $(this);
        title = data.text();
        json.title = title;
      });

      $('.a-size-medium', '.inlineBlock-display').filter(function () {
        var data = $(this);
        var re = /[\$] (\d+(?:\.\d{1,2})?)/;
        price = data.text().match(re);
        json.price = price[1];
      });
    } else {
      console.log('Error: ', error);
    }

    console.log(JSON.stringify(json));
  });
});

exports = module.exports = app;