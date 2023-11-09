const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Abner2201", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
