'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlTools = require('graphql-tools');

var _mocks = require('./mocks');

var _mocks2 = _interopRequireDefault(_mocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeDefs = '\n  type Item {\n    id: Int\n    title: String\n    price: Float\n    url: String\n  }\n  type Query {\n    item(title: String, price: Float, url: String): Item\n    testString: String\n  }\n';

var schema = (0, _graphqlTools.makeExecutableSchema)({ typeDefs: typeDefs });

(0, _graphqlTools.addMockFunctionsToSchema)({ schema: schema, mocks: _mocks2.default });

exports.default = schema;