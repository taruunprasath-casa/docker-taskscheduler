"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const Sequelize = require("sequelize");
exports.sequelize = new Sequelize("taskscheduler", "taruun", "123456", {
    host: "localhost",
    dialect: "postgres",
    define: {
        underscored: true,
    },
});
