import Sequelize from 'sequelize';

const sequelize = new Sequelize('scraper', 'myuser', 'mypassword', {
  host: 'localhost',
  port: 5433,
  dialect: 'postgres'
});

export default sequelize;