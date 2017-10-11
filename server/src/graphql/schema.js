import {
  makeExecutableSchema,
} from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
  type Products {
    products: [Product]
  }
  type Product {
    id: ID
    title: String
    price: Float
    url: String
  }
  type Query {
    product(id: ID, title: String, price: Float, url: String): Product
    products: Products
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });


export default schema;