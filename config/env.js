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

/*
  DATABASE_URL: process.env.DATABASE_URL || 'jdbc:postgresql://localhost:5432/sequelize_blog_post',
  DATABASE_NAME: process.env.DATABASE_NAME || 'airbnb_db3',
  DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'root',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'divya',
  DATABASE_PORT: process.env.DATABASE_PORT || 3306,
*/  

/*
  PORT: process.env.PORT || 8082,
  DATABASE_URL: process.env.DATABASE_URL || 'mysql://gnkyrajlydq12zg7:xfvz7tlw83qqhiwh@rtzsaka6vivj2zp1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/dy0fmosbk7rfw77r',
  DATABASE_NAME: process.env.DATABASE_NAME || 'dy0fmosbk7rfw77r',
  DATABASE_HOST: process.env.DATABASE_HOST || 'rtzsaka6vivj2zp1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'gnkyrajlydq12zg7',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || ' xfvz7tlw83qqhiwh',
  DATABASE_PORT: process.env.DATABASE_PORT || 3306,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mysql',

  NODE_ENV: process.env.NODE_ENV || 'production',
*/