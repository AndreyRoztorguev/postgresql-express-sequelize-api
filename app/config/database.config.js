require("./environment.config")();
console.log("NODE_ENV db", process.env.NODE_ENV);

const {
  NODE_ENV,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_NAME,
  DATABASE_HOST,
  DATABASE_DIALECT,
} = process.env;

module.exports = {
  [NODE_ENV]: {
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    host: DATABASE_HOST,
    dialect: DATABASE_DIALECT,
  },
};
