import express from 'express';
import fs from 'fs';
import logger from 'morgan';
import request from 'request';
import cheerio from 'cheerio';

import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { buildSchema } from 'graphql';
import bodyParser from 'body-parser';

import { db } from './db';

const GRAPHQL_PORT = parseInt(process.env.GRAPHQL_PORT, 10) || 3000;

var app = express();

import schema from './graphql/schema';

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema: schema,
  context: {
    db
  }
})),
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.get('/scrape', function(req, res){
  request(req.url, function(error, response, html){
    // Define our data attributes
    var title, price, author, narrator, length;
    var json = { title : "", price : "" };

    if(!error){
      // Initialize Cheerio library
      var $ = cheerio.load(html);

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