"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db/db");
class Role extends sequelize_1.Model {
}
exports.Role = Role;
Role.init({
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: db_1.sequelize,
    modelName: "Role",
    tableName: "role",
});
