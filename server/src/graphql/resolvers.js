import db from '../db';

const resolvers = {
  Query: {
    product: (_, { id }, context) => {
      return context.db.query.loadProductById(id).then(
        data => data
      )
    },
    products: (_,{}, context) => {
      return context.db.query.loadProducts().then(
        // Logging correct data from the database
        data => {console.warn(data); return data;}
      )
    }
  },
};

export default resolvers;