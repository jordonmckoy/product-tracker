import {
  makeExecutableSchema,
  addMockFunctionsToSchema
} from 'graphql-tools';
import resolvers from './resolvers';

// Mock api
/*import mocks from './mocks';

addMockFunctionsToSchema({ schema, mocks });*/

const typeDefs = `
  type Item {
    id: Int
    title: String
    price: Float
    url: String
  }
  type Query {
    item(title: String, price: Float, url: String): Item
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });


export default schema;