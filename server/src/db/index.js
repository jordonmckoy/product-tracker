const knex = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
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
