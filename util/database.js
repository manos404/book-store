const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("node-complete", "manos", "root", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
