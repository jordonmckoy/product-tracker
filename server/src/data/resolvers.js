const resolvers = {
  Query: {
    item(root, args){
      return { id: 1, title: 'Book One', price: 9.99, url: 'www.google.com' };
    },
  },
};

export default resolvers;