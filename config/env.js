'use strict';

const env = {
  PORT: process.env.PORT || 8082,
  DATABASE_URL: process.env.DATABASE_URL || 'jdbc:postgresql://localhost:5432/sequelize_blog_post',
  DATABASE_NAME: process.env.DATABASE_NAME || 'airbnb_db3',
  DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'root',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'divya',
  DATABASE_PORT: process.env.DATABASE_PORT || 3306,

  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mysql',

  NODE_ENV: process.env.NODE_ENV || 'production',
};

module.exports = env;

