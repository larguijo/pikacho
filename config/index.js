console.log("env", process.env.NODE_ENV);
const env = process.env.NODE_ENV || "development";
const config = require(`./${env}`); // eslint-disable-line import/no-dynamic-require
config.env = env;
console.log("config", config);
module.exports = config;
