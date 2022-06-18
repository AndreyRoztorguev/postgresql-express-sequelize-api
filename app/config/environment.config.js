const path = require("path");
const chalk = require("chalk");

module.exports = function () {
  const NODE_ENV = process.env.NODE_ENV;

  switch (NODE_ENV) {
    case "production":
      return require("dotenv").config({
        path: path.join(__dirname, `../../env/.env.production`),
      });
    case "test":
      return require("dotenv").config({
        path: path.join(__dirname, `../../env/.env.test`),
      });
    case "local":
      return require("dotenv").config({
        path: path.join(__dirname, `../../env/.env.local`),
      });
    default:
      console.log(
        chalk.red(
          `${chalk.bgWhite(
            "WARNING!!!"
          )}\nYou use unexist NODE_ENV variable: ${chalk.blue(
            `[${NODE_ENV}]`
          )} \nThe NODE_ENV variable will be overridden to ${chalk.green(
            "[development]"
          )}!`
        )
      );
      process.env.NODE_ENV = "development";
      return require("dotenv").config({
        path: path.join(__dirname, `../../env/.env.development`),
      });
  }
};
