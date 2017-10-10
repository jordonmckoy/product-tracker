'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlTools = require('graphql-tools');

var _resolvers = require('./resolvers');

var _resolvers2 = _interopRequireDefault(_resolvers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Mock api
/*import mocks from './mocks';

addMockFunctionsToSchema({ schema, mocks });*/

var typeDefs = '\n  type Item {\n    id: Int\n    title: String\n    price: Float\n    url: String\n  }\n  type Query {\n    item(title: String, price: Float, url: String): Item\n  }\n';

var schema = (0, _graphqlTools.makeExecutableSchema)({ typeDefs: typeDefs, resolvers: _resolvers2.default });

exports.default = schema;