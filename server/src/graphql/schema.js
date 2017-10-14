import {
  makeExecutableSchema,
} from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
  type Product {
    id: ID
    title: String
    price: Float
    url: String
  }
  type Query {
    product(id: ID, title: String, price: Float, url: String): Product,
    products: [Product]
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });


export default schema;
