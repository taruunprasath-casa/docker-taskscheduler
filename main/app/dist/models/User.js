"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db/db");
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE(3),
        defaultValue: db_1.sequelize.literal("current_timestamp(3)"),
        allowNull: false,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE(3),
        defaultValue: db_1.sequelize.literal("current_timestamp(3)"),
        allowNull: false,
    },
}, {
    sequelize: db_1.sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: true,
});
