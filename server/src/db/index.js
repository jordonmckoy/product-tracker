const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'myuser',
    password: 'mypassword',
    database: 'scraper'
  }
});

const loadProducts = () => {
 // console.warn(knex.select().from('Product'));
  return knex.select().from('Product')
    .then(res => res);
}

const loadProductById = (id) => {
  return knex.select().from('Product').where('id', id);
}

const db = {
  knex,
  query: {
    loadProducts,
    loadProductById
  }
}

export { db };