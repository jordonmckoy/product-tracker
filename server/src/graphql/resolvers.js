import db from '../db';

const resolvers = {
  Query: {
    products(_, {}, context) {
      return context.db.query.loadProducts().then(
        res => res.filter(data => ({
          id: data.id,
          title: data.title,
          price: data.price,
          url: data.url
        }))
      )
    },
    product(_, {id}, context) {
      return context.db.query.loadProductById(id).then(
        data => {
          if (data.length > 1) {
            return null;
          }
          return {
            id: data[0].id,
            title: data[0].title,
            price: data[0].price,
            url: data[0].url
          };
        }
      );
    }
  }
};

export default resolvers;
