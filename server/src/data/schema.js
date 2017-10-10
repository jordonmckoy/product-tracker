import {
  makeExecutableSchema,
  addMockFunctionsToSchema
} from 'graphql-tools';
import mocks from './mocks';

const typeDefs = `
  type Item {
    id: Int
    title: String
    price: Float
    url: String
  }
  type Query {
    item(title: String, price: Float, url: String): Item
    testString: String
  }
`;

const schema = makeExecutableSchema({ typeDefs });

addMockFunctionsToSchema({ schema, mocks });

export default schema;