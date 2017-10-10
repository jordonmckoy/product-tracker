import express from 'express';
import fs from 'fs';
import logger from 'morgan';
import request from 'request';
import cheerio from 'cheerio';

import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';
import bodyParser from 'body-parser';

const GRAPHQL_PORT = parseInt(process.env.GRAPHQL_PORT, 10) || 3000;

var app = express();

import schema from './data/schema';

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: global,
  graphiql: true
}));

app.listen(4000, () => console.log('Now listening on localhost:4000/graphql'))

app.get('/scrape', function(req, res){
  url = "https://www.amazon.ca/Three-Simple-Steps-Success-Business/dp/1936661713/ref=sr_1_1?ie=UTF8&qid=1507562266&sr=8-1&keywords=Three+Simple+Steps";

  request(url, function(error, response, html){
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