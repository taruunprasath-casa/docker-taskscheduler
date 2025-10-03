"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db/db");
class Task extends sequelize_1.Model {
}
exports.Task = Task;
Task.init({
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
    descripition: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    estimatedDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
        field: "estimated_date",
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
    modelName: "Task",
    tableName: "task",
    timestamps: false,
});
